export function openBookingModal() {
  window.dispatchEvent(new CustomEvent("sumzero:open-booking"))
}
