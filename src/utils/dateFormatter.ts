import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormatter(date: string) {
  const formattedDate = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return formattedDate
}
