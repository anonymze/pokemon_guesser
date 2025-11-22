import { type Component } from "solid-js"
import { toast as sonnerToast } from "solid-sonner"


export function toast(toastMessage: string) {
  return sonnerToast.custom((id) => <Toast id={id} title={toastMessage}  />)
}

interface ToastProps {
  id: string | number
  title: string
}

const Toast: Component<ToastProps> = (props) => {
  return (
    <div class="relative retro">
      <div class="flex rounded-lg bg-background shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
        <div class="flex flex-1 items-center">
          <div class="w-full">
            <p class="text-sm font-medium text-foreground">{props.title}</p>
          </div>
        </div>
      </div>

      <div class="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-warning bg-ring" />
      <div class="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-warning bg-ring" />
      <div class="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-warning bg-ring" />
      <div class="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-warning bg-ring" />
      <div class="absolute top-0 left-0 size-1.5 bg-warning bg-ring" />
      <div class="absolute top-0 right-0 size-1.5 bg-warning bg-ring" />
      <div class="absolute bottom-0 left-0 size-1.5 bg-warning bg-ring" />
      <div class="absolute bottom-0 right-0 size-1.5 bg-warning bg-ring" />
      <div class="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-warning bg-ring" />
      <div class="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-warning bg-ring" />
      <div class="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-warning bg-ring" />
      <div class="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-warning bg-ring" />
    </div>
  )
}
