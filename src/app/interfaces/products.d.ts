export interface PropsProducts {
  id?: number;
  produto: string;
  quantidade: number;
  categoria: string;
  preço: string;
  created_at: Date | string;
}

export interface PropsProductsQuery {
  id?: number;
  produto?: string;
  quantidade?: number;
  categoria?: string;
  preço?: string;
  created_at?: Date | string;
}
