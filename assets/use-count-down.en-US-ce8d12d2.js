import{_ as s}from"./locales-f9abcc45.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=t(`<h1>useCountDown</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to manage the countdown.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Total time：{{ current.total }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain days：{{ current.days }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain hours：{{ current.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain minutes：{{ current.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain seconds：{{ current.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain milliseconds：{{ current.milliseconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
    });

    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="millisecond" tabindex="-1">Millisecond</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
      <span class="hljs-attr">millisecond</span>: <span class="hljs-literal">true</span>,
    });
    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {
  <span class="hljs-attr">days</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">hours</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">total</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">minutes</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">seconds</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">milliseconds</span>: <span class="hljs-built_in">number</span>;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CountDown</span> = {
  <span class="hljs-attr">start</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">pause</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">reset</span>: <span class="hljs-function">(<span class="hljs-params">totalTime: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">current</span>: <span class="hljs-title class_">ComputedRef</span>&lt;<span class="hljs-title class_">CurrentTime</span>&gt;;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">UseCountDownOptions</span> = {
  <span class="hljs-attr">time</span>: <span class="hljs-built_in">number</span>;
  millisecond?: <span class="hljs-built_in">boolean</span>;
  onChange?: <span class="hljs-function">(<span class="hljs-params">current: CurrentTime</span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  onFinish?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useCountDown</span>(<span class="hljs-params">options: UseCountDownOptions</span>): <span class="hljs-title class_">CountDown</span>;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>time</td><td>Total time, unit milliseconds</td><td><em>number</em></td><td>-</td></tr><tr><td>millisecond</td><td>Whether to enable millisecond render</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onChange</td><td>Triggered when count down changed</td><td><em>(current: CurrentTime) =&gt; void</em></td><td>-</td></tr><tr><td>onFinish</td><td>Triggered when count down finished</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>current</td><td>Current remain time</td><td><em>CurrentTime</em></td></tr><tr><td>start</td><td>Start count down</td><td><em>() =&gt; void</em></td></tr><tr><td>pause</td><td>Pause count down</td><td><em>() =&gt; void</em></td></tr><tr><td>reset</td><td>Reset count down</td><td><em>(time?: number): void</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-structure" tabindex="-1">CurrentTime Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>total</td><td>Total time, unit milliseconds</td><td><em>number</em></td></tr><tr><td>days</td><td>Remain days</td><td><em>number</em></td></tr><tr><td>hours</td><td>Remain hours</td><td><em>number</em></td></tr><tr><td>minutes</td><td>Remain minutes</td><td><em>number</em></td></tr><tr><td>seconds</td><td>Remain seconds</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>Remain milliseconds</td><td><em>number</em></td></tr></tbody></table></div>`,10),c=[p];function d(r,i){return n(),a("div",e,c)}const u=s(l,[["render",d]]);export{u as default};
