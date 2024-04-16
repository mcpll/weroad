import { defineFormKitConfig } from '@formkit/vue';
import { rootClasses } from '~/formkit.theme';
import { createAutoHeightTextareaPlugin } from '@formkit/addons';
export default defineFormKitConfig(() => ({
  config: { rootClasses },
  plugins: [createAutoHeightTextareaPlugin()],
}));
