import { vi } from 'vitest';

vi.mock('./app/db.server', () => ({
  // prisma mock設定。警告が出るので、以下の行のコメントで警告を消している
  // @ts-ignore
  prisma: vPrisma.client,
}));
