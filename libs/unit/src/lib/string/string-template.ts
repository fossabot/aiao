import get from 'lodash/get';

/**
 * 模板字符串
 */
export const stringTemplate = (
  template: string,
  data: { [name: string]: any } = {}
): string =>
  template.replace(/\${([^}]+)}/g, (_, key: string) =>
    get(data, key.trim(), '')
  );
