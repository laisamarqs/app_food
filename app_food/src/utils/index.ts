import { SyntheticEvent } from 'react'


interface Menu {
  preco?: number;
  
}

export const formatDescription = (desc: string) => {
  if (desc.length > 210) {
    return desc.slice(0, 207) + '...'
  }
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const calculeTotalPrice = (items: Menu[]) => {
  return items.reduce((acc, currentValue) => {
    if (currentValue.preco) {
      return (acc += currentValue.preco)
    }
    return acc; 
  }, 0)
}

export const removeLoading = (e: SyntheticEvent<HTMLImageElement>) => {
  return e.currentTarget.classList.remove('loading')
}
