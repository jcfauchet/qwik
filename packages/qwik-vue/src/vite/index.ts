export function QwikVue(options?: any) {
  const virtualModuleId = 'virtual:@qwik/vue/app';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  return {
    name: 'virtual:@qwik/vue/app',
    resolveId(id: string) {
      if (id == virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        if (options?.appEntrypoint) {
          return `export { default as setup } from "${options.appEntrypoint}";`;
        }
        return `export const setup = () => {};`;
      }
    },
  };
}
