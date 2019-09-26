/**
 * 单行文本
 */
export const stringSingleline = (value: string) => {
  return value.replace(/\f|\n|\r|\t|\v/g, '').replace(/ +/g, ' ');
};
