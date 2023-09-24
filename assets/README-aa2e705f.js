import{_ as s}from"./locales-f9abcc45.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},c={class:"van-doc-markdown-body"},l=n(`<h1>Icon</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The font-based icon set that can be used via the Icon component or referenced in other components via the <code>icon</code> attribute.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Icon</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>name</code> prop to set icon name or icon URL.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="using-url" tabindex="-1">Using URL</h3><p>You can directly passing an image URL to the <code>name</code> props.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-badge" tabindex="-1">Show Badge</h3><p>Use <code>dot</code> prop, a small red dot will be displayed in the upper right corner of the icon.</p><p>Use <code>badge</code> prop, the badge will be displayed in the upper right corner of the icon.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="icon-color" tabindex="-1">Icon Color</h3><p>Use <code>color</code> prop to set icon color.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fire-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="icon-size" tabindex="-1">Icon Size</h3><p>Use <code>size</code> prop to set icon size.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Using px unit by default --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- Using rem unit --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;3rem&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="add-custom-iconfont" tabindex="-1">Add custom iconfont</h3><pre><code class="language-css"><span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#39;./my-icon.ttf&#39;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&#39;truetype&#39;</span>);
}

<span class="hljs-selector-class">.my-icon</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
}

<span class="hljs-selector-class">.my-icon-extra</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;\\e626&#39;</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">class-prefix</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;extra&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Icon name or URL</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>Whether to show red dot</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>Content of the badge</td><td><em>number | string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>badge-props</td><td>Props of Badge, see <a href="#/en-US/badge#props" target="_blank">Badge - props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>color</td><td>Icon color</td><td><em>string</em></td><td><code>inherit</code></td></tr><tr><td>size</td><td>Icon size</td><td><em>number | string</em></td><td><code>inherit</code></td></tr><tr><td>class-prefix</td><td>ClassName prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>tag</td><td>HTML Tag of root element</td><td><em>string</em></td><td><code>i</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when icon is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IconProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,14),o=[l];function p(d,r){return a(),t("div",c,o)}const g=s(e,[["render",p]]);export{g as default};
