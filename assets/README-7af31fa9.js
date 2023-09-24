import{_ as s}from"./locales-f9abcc45.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},o=n(`<h1>Signature</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Component for signature scene, based on Canvas. Please upgrade <code>vant</code> to &gt;= v4.3.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>When the confirm button is clicked, the component will emit the <code>submit</code> event. The first parameter of the event is <code>data</code>, which contains the following fields:</p><ul><li><code>image</code>: The image corresponding to the signature, which is in base64 string format. Returns an empty string if the signature is empty.</li><li><code>canvas</code>: The Canvas element.</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> image = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">data</span>) =&gt; {
      image.<span class="hljs-property">value</span> = data.<span class="hljs-property">image</span>;
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClear</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;clear&#39;</span>);

    <span class="hljs-keyword">return</span> {
      image,
      onSubmit,
      onClear,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="pen-color" tabindex="-1">Pen Color</h3><p>Use <code>pen-color</code> prop to set the color of the brush stroke.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">pen-color</span>=<span class="hljs-string">&quot;#ff0000&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="line-width" tabindex="-1">Line Width</h3><p>Use <code>line-width</code> prop to set the width of the line.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="background-color" tabindex="-1">Background Color</h3><p>Use <code>background-color</code> prop to set the color of the background.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#eee&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Export image type</td><td><em>string</em></td><td><code>png</code></td></tr><tr><td>pen-color</td><td>Color of the brush stroke, default is black</td><td><em>string</em></td><td><code>#000</code></td></tr><tr><td>line-width</td><td>Width of the line</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>background-color</td><td>Background color</td><td><em>string</em></td><td>-</td></tr><tr><td>tips</td><td>Text that appears when Canvas is not supported</td><td><em>string</em></td><td>-</td></tr><tr><td>clear-button-text</td><td>Clear button text</td><td><em>string</em></td><td><code>Clear</code></td></tr><tr><td>confirm-button-text</td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Callback Parameters</th></tr></thead><tbody><tr><td>start</td><td>Emitted when signing starts</td><td>-</td></tr><tr><td>end</td><td>Emitted when signing ends</td><td>-</td></tr><tr><td>signing</td><td>Emitted when signing</td><td><em>event: TouchEvent</em></td></tr><tr><td>submit</td><td>Emitted when clicking the confirm button</td><td><em>data: { image: string; canvas: HTMLCanvasElement }</em></td></tr><tr><td>clear</td><td>Emitted when clicking the cancel button</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> type { <span class="hljs-title class_">SignatureProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-signature-padding</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-signature-content-height</td><td><em>200px</em></td><td>Height of the canvas</td></tr><tr><td>--van-signature-content-background</td><td><em>var(--van-background-2)</em></td><td>Background color of the canvas</td></tr><tr><td>--van-signature-content-border</td><td><em>1px dotted #dadada</em></td><td>Border style of the canvas</td></tr></tbody></table></div>`,14),l=[o];function r(c,p){return t(),a("div",d,l)}const g=s(e,[["render",r]]);export{g as default};
