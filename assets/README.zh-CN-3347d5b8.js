import{_ as t}from"./locales-f9abcc45.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>SubmitBar 提交订单栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于展示订单金额与提交订单。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SubmitBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SubmitBar</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span> <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;提交订单&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;点击按钮&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSubmit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>禁用状态下不会触发 <code>submit</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span>
  <span class="hljs-attr">disabled</span>
  <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span>
  <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;提交订单&quot;</span>
  <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;你的收货地址不支持配送&quot;</span>
  <span class="hljs-attr">tip-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>
  @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">加载状态</h3><p>加载状态下不会触发 <code>submit</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span>
  <span class="hljs-attr">loading</span>
  <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span>
  <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;提交订单&quot;</span>
  @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="gao-ji-yong-fa" tabindex="-1">高级用法</h3><p>通过插槽插入自定义内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span> <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;提交订单&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tip</span>&gt;</span>
    你的收货地址不支持配送, <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickLink&quot;</span>&gt;</span>修改地址<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-submit-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;点击按钮&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLink</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;修改地址&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSubmit,
      onClickLink,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>price</td><td>金额（单位分）</td><td><em>number</em></td><td>-</td></tr><tr><td>decimal-length</td><td>金额小数点位数</td><td><em>number | string</em></td><td><code>2</code></td></tr><tr><td>label</td><td>金额左侧文案</td><td><em>string</em></td><td><code>合计：</code></td></tr><tr><td>suffix-label</td><td>金额右侧文案</td><td><em>string</em></td><td>-</td></tr><tr><td>text-align</td><td>金额文案对齐方向，可选值为 <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>button-text</td><td>按钮文字</td><td><em>string</em></td><td>-</td></tr><tr><td>button-type</td><td>按钮类型</td><td><em>string</em></td><td><code>danger</code></td></tr><tr><td>button-color</td><td>自定义按钮颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>tip</td><td>在订单栏上方的提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>tip-icon</td><td>提示文案左侧的图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>currency</td><td>货币符号</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>是否显示将按钮显示为加载中状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>是否在标签位置生成一个等高的占位元素</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>submit</td><td>按钮点击事件回调</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义订单栏左侧内容</td></tr><tr><td>button</td><td>自定义按钮</td></tr><tr><td>top</td><td>自定义订单栏上方内容</td></tr><tr><td>tip</td><td>提示文案中的额外内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SubmitBarProps</span>, <span class="hljs-title class_">SubmitBarTextAlign</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-submit-bar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-submit-bar-z-index</td><td><em>100</em></td><td>-</td></tr><tr><td>--van-submit-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-submit-bar-button-width</td><td><em>110px</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-integer-font-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-font</td><td><em>var(--van-price-font)</em></td><td>-</td></tr><tr><td>--van-submit-bar-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-submit-bar-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-line-height</td><td><em>1.5</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-color</td><td><em>var(--van-orange-dark)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-background</td><td><em>var(--van-orange-light)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-icon-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-submit-bar-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-submit-bar-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr></tbody></table></div>`,15),p=[l];function r(c,i){return s(),a("div",e,p)}const m=t(d,[["render",r]]);export{m as default};
