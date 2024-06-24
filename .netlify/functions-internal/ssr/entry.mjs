import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_wFPX-ZG6.mjs';

const _page0  = () => import('./chunks/generic_kNaeaHD-.mjs');
const _page1  = () => import('./chunks/index_2yfD0mvp.mjs');
const _page2  = () => import('./chunks/residentialAutomation_IVG1V0Mc.mjs');
const _page3  = () => import('./chunks/comercialAutomation_PlEdXXU_.mjs');
const _page4  = () => import('./chunks/electrical_BSi7KHwc.mjs');
const _page5  = () => import('./chunks/solutions_l5etx7-m.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/residentialAutomation.astro", _page2],["src/pages/comercialAutomation.astro", _page3],["src/pages/electrical.astro", _page4],["src/pages/solutions.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
