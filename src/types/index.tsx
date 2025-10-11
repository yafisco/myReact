// src/types/index.tsx

export type Course = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  level?: string;
  categoryId?: number;
};
