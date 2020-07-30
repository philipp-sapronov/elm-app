import { IArticle } from './interface';
import { ArticleStatus } from './enums';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const getArticle = (params?: Partial<IArticle>): IArticle => {
  const example = {
    content: lorem,
    createdAt: new Date(),
    _id: (Math.random() * 10).toFixed(8),
    preview: lorem.substring(0, 100),
    slug: `zero`,
    status: ArticleStatus.publish,
    tags: ['tag1', 'tag2'],
    title: `Title of article`,
    categories: ['typescript'],
    updatedAt: new Date(),
  };

  return Object.assign(example as IArticle, params || {});
};

export const articles = [
  getArticle({ slug: 'first', tags: ['f'] }),
  getArticle({ slug: 'second', tags: ['f'] }),
  getArticle({ slug: 'third', tags: ['s'] }),
];
