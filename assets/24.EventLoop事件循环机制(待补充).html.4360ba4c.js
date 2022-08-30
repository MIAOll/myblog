import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.a63c222e.js";const p={},o=t(`<h1 id="eventloop\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#eventloop\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" aria-hidden="true">#</a> EventLoop\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236</h1><h2 id="\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF</h2><p>JavaScript\u4EE3\u7801\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u9664\u4E86\u4F9D\u9760\u51FD\u6570\u8C03\u7528\u6808\u6765\u641E\u5B9A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F\u5916\uFF0C\u8FD8\u4F9D\u9760\u4EFB\u52A1\u961F\u5217(task queue)\u6765\u641E\u5B9A\u53E6\u5916\u4E00\u4E9B\u4EE3\u7801\u7684\u6267\u884C\u3002\u6574\u4E2A\u6267\u884C\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u79F0\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\u8FC7\u7A0B\u3002\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u662F\u552F\u4E00\u7684\uFF0C\u4F46\u662F\u4EFB\u52A1\u961F\u5217\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A\u3002<strong>\u4EFB\u52A1\u961F\u5217\u53C8\u5206\u4E3Amacro-task\uFF08\u5B8F\u4EFB\u52A1\uFF09\u4E0Emicro-task\uFF08\u5FAE\u4EFB\u52A1\uFF09</strong>\uFF0C\u5728\u6700\u65B0\u6807\u51C6\u4E2D\uFF0C\u5B83\u4EEC\u88AB\u5206\u522B\u79F0\u4E3Atask\u4E0Ejobs\u3002</p><p><strong>macro-task\u5927\u6982\u5305\u62EC\uFF1A</strong></p><ul><li>script(\u6574\u4F53\u4EE3\u7801)</li><li>setTimeout</li><li>setInterval</li><li>setImmediate //<code>setImmediate</code>\u6BD4<code>setTimeout(fn, 0)</code>\u5148\u6267\u884C</li><li>I/O</li><li>UI render</li></ul><p>micro-task\u5927\u6982\u5305\u62EC:</p><ul><li>process.nextTick</li><li>Promise</li><li>Async/Await(\u5B9E\u9645\u5C31\u662Fpromise)</li><li>MutationObserver(html5\u65B0\u7279\u6027)</li></ul><p>\u6574\u4F53\u6267\u884C\uFF0C\u6211\u753B\u4E86\u4E00\u4E2A\u6D41\u7A0B\u56FE\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/27/170847d202084604~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt="GitHub"></p><p>\u603B\u7684\u7ED3\u8BBA\u5C31\u662F\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u7136\u540E\u6267\u884C\u8BE5\u5B8F\u4EFB\u52A1\u4EA7\u751F\u7684\u5FAE\u4EFB\u52A1\uFF0C\u82E5\u5FAE\u4EFB\u52A1\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u4E86\u65B0\u7684\u5FAE\u4EFB\u52A1\uFF0C\u5219\u7EE7\u7EED\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u56DE\u5230\u5B8F\u4EFB\u52A1\u4E2D\u8FDB\u884C\u4E0B\u4E00\u8F6E\u5FAA\u73AF\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/27/170847cc5f5eb691~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt="GitHub"></p><p>\u7ED3\u5408\u6D41\u7A0B\u56FE\u7406\u89E3\uFF0C\u7B54\u6848\u8F93\u51FA\u4E3A\uFF1Aasync2 end =&gt; Promise =&gt; async1 end =&gt; promise1 =&gt; promise2 =&gt; setTimeout \u4F46\u662F\uFF0C\u5BF9\u4E8Easync/await \uFF0C\u6211\u4EEC\u6709\u4E2A\u7EC6\u8282\u8FD8\u8981\u5904\u7406\u4E00\u4E0B\u3002\u5982\u4E0B\uFF1A</p><h2 id="async-await\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#async-await\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> async/await\u6267\u884C\u987A\u5E8F</h2><p>\u6211\u4EEC\u77E5\u9053**<code>async</code>\u9690\u5F0F\u8FD4\u56DE Promise \u4F5C\u4E3A\u7ED3\u679C\u7684\u51FD\u6570,\u90A3\u4E48\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\uFF0Cawait\u540E\u9762\u7684\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u65F6\uFF0Cawait\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5FAE\u4EFB\u52A1(Promise.then\u662F\u5FAE\u4EFB\u52A1)\u3002**\u4F46\u662F\u6211\u4EEC\u8981\u6CE8\u610F\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\u4EA7\u751F\u7684\u65F6\u673A\uFF0C\u5B83\u662F\u6267\u884C\u5B8Cawait\u4E4B\u540E\uFF0C\u76F4\u63A5\u8DF3\u51FAasync\u51FD\u6570\uFF0C\u6267\u884C\u5176\u4ED6\u4EE3\u7801(\u6B64\u5904\u5C31\u662F\u534F\u7A0B\u7684\u8FD0\u4F5C\uFF0CA\u6682\u505C\u6267\u884C\uFF0C\u63A7\u5236\u6743\u4EA4\u7ED9B)\u3002\u5176\u4ED6\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u518D\u56DE\u5230async\u51FD\u6570\u53BB\u6267\u884C\u5269\u4E0B\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u628Aawait\u540E\u9762\u7684\u4EE3\u7801\u6CE8\u518C\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u5F53\u4E2D\u3002\u6211\u4EEC\u6765\u770B\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async2 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//    script start</span>
      <span class="token comment">// VM35:8 async2 end</span>
      <span class="token comment">// VM35:17 Promise</span>
      <span class="token comment">// VM35:27 script end</span>
      <span class="token comment">// VM35:5 async1 end</span>
      <span class="token comment">// VM35:21 promise1</span>
      <span class="token comment">// VM35:24 promise2</span>
      <span class="token comment">// undefined</span>
      <span class="token comment">// VM35:13 setTimeout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","24.EventLoop\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236(\u5F85\u8865\u5145).html.vue"]]);export{r as default};
