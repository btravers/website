export function dateFormatter(date) {
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "short" })
}
