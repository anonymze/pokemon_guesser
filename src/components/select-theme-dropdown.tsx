import { type Component } from "solid-js"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select"

export type Language = {
  code: string
  label: string
  flag: string
}

interface SelectLanguageDropdownProps {
  activeLanguage: string
  setActiveLanguage: (language: string) => void
  languages: Array<Language>
}

export const SelectLanguageDropdown: Component<SelectLanguageDropdownProps> = (props) => {
  const getLanguage = (code: string) => props.languages.find((l) => l.code === code)

  return (
    <Select
      options={props.languages.map((l) => l.code)}
      value={props.activeLanguage}
      onChange={(value) => {
        if (typeof value !== "string") return
        props.setActiveLanguage(value)
      }}
      placeholder="Select"
      itemComponent={(itemProps) => {
        const lang = getLanguage(itemProps.item.rawValue as string)
        return (
          <SelectItem item={itemProps.item}>
            <div class="flex items-center gap-2">
              <img src={lang?.flag} alt="" class="w-4 h-4" />
              <span>{lang?.label}</span>
            </div>
          </SelectItem>
        )
      }}
    >
      <SelectTrigger class="w-[210px]">
        <SelectValue font="retro">
          {(state) => {
            const lang = getLanguage(state.selectedOption())
            return lang ? (
              <div class="flex items-center gap-2">
                <img src={lang.flag} alt="" class="w-4 h-4" />
                <span>{lang.label}</span>
              </div>
            ) : (
              "Select language"
            )
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent />
    </Select>
  )
}
