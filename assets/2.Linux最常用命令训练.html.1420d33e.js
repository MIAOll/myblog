import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,b as n,a as c,e as s,d as t,r as d}from"./app.a63c222e.js";const o={},p=s(`<h1 id="linux\u6700\u5E38\u7528\u547D\u4EE4\u8BAD\u7EC3" tabindex="-1"><a class="header-anchor" href="#linux\u6700\u5E38\u7528\u547D\u4EE4\u8BAD\u7EC3" aria-hidden="true">#</a> Linux\u6700\u5E38\u7528\u547D\u4EE4\u8BAD\u7EC3</h1><h2 id="_1-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 1.\u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/gcy
<span class="token function">ifconfig</span> 
<span class="token comment">## \u67E5\u770B\u5F53\u524D\u7F51\u7EDC ip</span>
<span class="token function">ping</span> www.baidu.com
<span class="token comment">## \u6D4B\u8BD5\u5F53\u524D\u670D\u52A1\u5668\u662F\u5426\u53EF\u4EE5\u8FDE\u63A5\u767E\u5EA6</span>
<span class="token function">man</span> <span class="token function">ls</span>
<span class="token comment">## \u67E5\u770B ls \u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F</span>
<span class="token function">touch</span> test.txt
<span class="token function">ls</span> -l <span class="token operator">&gt;&gt;</span> test.txt
<span class="token function">man</span> test.txt

<span class="token builtin class-name">help</span> <span class="token builtin class-name">cd</span> 
<span class="token comment">## \u67E5\u770B cd \u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F</span>
<span class="token comment">## help \u547D\u4EE4\uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u83B7\u5F97 shell \u5185\u7F6E\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF09</span>

<span class="token function">clear</span>
<span class="token comment">## \u6E05\u5C4F\uFF0C\u7B49\u540C\u4E8E ctrl + l</span>
reset
<span class="token comment">## \u5F7B\u5E95\u6E05\u5C4F\u662F\uFF1Areset</span>

<span class="token builtin class-name">pwd</span> 
<span class="token comment">## \u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>

<span class="token function">ls</span> -a 
<span class="token comment">## \u5168\u90E8\u7684\u6587\u4EF6\uFF0C\u8FDE\u540C\u9690\u85CF\u6863( \u5F00\u5934\u4E3A . \u7684\u6587\u4EF6) \u4E00\u8D77\u5217\u51FA\u6765(\u5E38\u7528)</span>
<span class="token function">ls</span> -l 
<span class="token comment">## \u957F\u6570\u636E\u4E32\u5217\u51FA == ll</span>

<span class="token comment">## cd: \u5207\u6362\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> ~ \u6216\u8005 <span class="token builtin class-name">cd</span>  \u56DE\u5230\u81EA\u5DF1\u7684\u5BB6\u76EE\u5F55
<span class="token builtin class-name">cd</span> - \u56DE\u5230\u4E0A\u4E00\u6B21\u6240\u5728\u76EE\u5F55
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> \u56DE\u5230\u5F53\u524D\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u76EE\u5F55

<span class="token function">mkdir</span>
<span class="token comment">##  mkdir \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u76EE\u5F55 \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u76EE\u5F55</span>
<span class="token comment">##  -p \u521B\u5EFA\u591A\u5C42\u76EE\u5F55</span>
<span class="token function">mkdir</span> -p gcy/hello/morld
<span class="token comment">## \u521B\u5EFA\u4E00\u4E2A\u591A\u7EA7\u76EE\u5F55</span>

<span class="token function">rmdir</span>
<span class="token comment">## \u5220\u9664\u4E00\u4E2A\u7A7A\u7684\u76EE\u5F55 \u5220\u9664\u4E00\u4E2A\u7A7A\u7684\u76EE\u5F55</span>
<span class="token function">rm</span> -rf 
<span class="token comment">## \u76EE\u5F55 \u5220\u9664\u76EE\u5F55\u53CA\u5185\u5BB9</span>

<span class="token comment">## touch \u521B\u5EFA\u7A7A\u6587\u4EF6</span>
<span class="token function">touch</span> gcy.txt

<span class="token comment">## cp \u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55 \u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55</span>
<span class="token comment">## 	-r \u9012\u5F52\u590D\u5236\u6574\u4E2A\u6587\u4EF6\u5939</span>
	
<span class="token comment">## (1)\u590D\u5236\u6587\u4EF6</span>
<span class="token function">cp</span> xiyou/dssz/suwukong.txt xiyou/mingjie/
<span class="token comment">## (2)\u9012\u5F52\u590D\u5236\u6574\u4E2A\u6587\u4EF6\u5939</span>
<span class="token function">cp</span> -r xiyou/dssz/ ./

<span class="token comment">## rm \u5220\u9664 \u5220\u9664\u6587\u4EF6\u6216\u76EE\u5F55</span>
<span class="token comment">## 	-r \u9012\u5F52\u5220\u9664</span>
<span class="token comment">## 	-f \u5F3A\u5236\u5220\u9664</span>
<span class="token function">rm</span> xiyou/mingjie/sunwukong.txt

<span class="token comment">## mv \u79FB\u52A8\u6587\u4EF6\u4E0E\u76EE\u5F55\u6216\u91CD\u547D\u540D \u79FB\u52A8\u6587\u4EF6\u4E0E\u76EE\u5F55\u6216\u91CD\u547D\u540D</span>
	<span class="token comment">## 1.\u91CD\u547D\u540D</span>
	<span class="token function">mv</span> xiyou/dssz/suwukong.txt xiyou/dssz/houge.txt
	<span class="token comment">## 2. \u79FB\u52A8\u6587\u4EF6</span>
	<span class="token function">mv</span> xiyou/dssz/houge.txt ./
	
<span class="token comment">## cat \u67E5\u770B\u6BD4\u8F83\u5C0F\u7684\u6587\u4EF6\uFF0C\u4E00\u5C4F\u5E55\u80FD\u663E\u793A\u5168\u7684</span>
	-n \u663E\u793A\u884C\u53F7
	
ll <span class="token operator">&gt;&gt;</span> test.txt
<span class="token function">cat</span> -n test.txt

<span class="token comment">## more \u67E5\u770B\u7684\u6587\u4EF6\u8F83\u5927</span>
	\u64CD\u4F5C \u529F\u80FD\u8BF4\u660E
\u7A7A\u767D\u952E <span class="token punctuation">(</span>space<span class="token punctuation">)</span> \u4EE3\u8868\u5411\u4E0B\u7FFB\u4E00\u9875\uFF1B
Enter \u4EE3\u8868\u5411\u4E0B\u7FFB\u300E\u4E00\u884C\u300F \uFF1B
q \u4EE3\u8868\u7ACB\u523B\u79BB\u5F00 <span class="token function">more</span> \uFF0C\u4E0D\u518D\u663E\u793A\u8BE5\u6587\u4EF6\u5185\u5BB9\u3002

<span class="token function">more</span> test.txt
<span class="token comment">## less\u5C11\u770B\u4E00\u70B9\u7C7B\u4F3Cmore</span>
<span class="token function">less</span> test.txt 

<span class="token comment">## head \u663E\u793A\u6587\u4EF6\u5934\u90E8\u5185\u5BB9 \u663E\u793A\u6587\u4EF6\u5934\u90E8\u5185\u5BB9</span>
	-n \u884C\u6570
<span class="token function">head</span> -n <span class="token number">2</span> test.txt
<span class="token comment">## tail \u8F93\u51FA\u6587\u4EF6\u5C3E\u90E8\u5185\u5BB9 \u8F93\u51FA\u6587\u4EF6\u5C3E\u90E8\u5185\u5BB9</span>
<span class="token function">tail</span> -n <span class="token number">2</span> test.txt

<span class="token comment">## echo \u8F93\u51FA\u5185\u5BB9\u5230\u63A7\u5236\u53F0</span>
	<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u8F93\u51FA\u5185\u5BB9<span class="token punctuation">]</span>
	<span class="token comment">## -e\uFF1A \u652F\u6301\u53CD\u659C\u7EBF\u63A7\u5236\u7684\u5B57\u7B26\u8F6C\u6362</span>
	\u63A7\u5236\u5B57\u7B26 \u4F5C\u7528
	<span class="token punctuation">\\</span><span class="token punctuation">\\</span> \u8F93\u51FA<span class="token punctuation">\\</span>\u672C\u8EAB
	<span class="token punctuation">\\</span>n \u6362\u884C\u7B26
	<span class="token punctuation">\\</span>t \u5236\u8868\u7B26\uFF0C\u4E5F\u5C31\u662F Tab \u952E
	
<span class="token builtin class-name">echo</span> \u201Chello<span class="token punctuation">\\</span>tworld\u201D
<span class="token builtin class-name">echo</span> -e \u201Chello<span class="token punctuation">\\</span>tworld\u201D

<span class="token comment">## &gt; \u8F93\u51FA\u91CD\u5B9A\u5411\u548C \u8F93\u51FA\u91CD\u5B9A\u5411\u548C &gt;&gt; \u8FFD\u52A0 \u8FFD\u52A0</span>
<span class="token function">ls</span> -l <span class="token operator">&gt;</span> \u6587\u4EF6 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u5217\u8868\u7684\u5185\u5BB9\u5199\u5165\u6587\u4EF6 a.txt \u4E2D\uFF08\u8986\u76D6\u5199 \u8986\u76D6\u5199\uFF09 \uFF09
<span class="token function">ls</span> -l <span class="token operator">&gt;&gt;</span> \u6587\u4EF6 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u5217\u8868\u7684\u5185\u5BB9\u8FFD\u52A0 \u8FFD\u52A0\u5230\u6587\u4EF6 aa.txt \u7684\u672B\u5C3E\uFF09
<span class="token function">ls</span> -l<span class="token operator">&gt;</span>houge.txt
<span class="token function">ls</span> -l<span class="token operator">&gt;&gt;</span>test.txt

<span class="token comment">## cat \u6587\u4EF6 1 &gt; \u6587\u4EF6 2 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u5C06\u6587\u4EF6 1 \u7684\u5185\u5BB9\u8986\u76D6\u5230\u6587\u4EF6 2\uFF09</span>
<span class="token function">cat</span> a.txt <span class="token operator">&gt;</span> b.txt
<span class="token builtin class-name">echo</span> \u201C\u5185\u5BB9\u201D <span class="token operator">&gt;&gt;</span> \u6587\u4EF6
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;hello<span class="token entity" title="\\t">\\t</span>world&quot;</span> <span class="token operator">&gt;</span> c.txt
	
<span class="token comment">## history \u67E5\u770B\u5DF2\u7ECF\u6267\u884C\u8FC7\u5386\u53F2\u547D\u4EE4 \u67E5\u770B\u5DF2\u7ECF\u6267\u884C\u8FC7\u5386\u53F2\u547D\u4EE4</span>
<span class="token function">history</span>

<span class="token comment">## date \u663E\u793A\u5F53\u524D\u65F6\u95F4 \u663E\u793A\u5F53\u524D\u65F6\u95F4</span>
<span class="token function">date</span>

<span class="token comment">## date \u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u95F4 \u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u95F4 </span>
<span class="token function">date</span> -s \u5B57\u7B26\u4E32\u65F6\u95F4
<span class="token function">date</span> -s <span class="token string">&quot;2017-06-19 20:52:18&quot;</span>

<span class="token comment">## cal \u67E5\u770B\u65E5\u5386</span>
<span class="token function">cal</span>

<span class="token comment">## su \u5207\u6362\u7528\u6237</span>
<span class="token function">su</span> \u7528\u6237\u540D\u79F0 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u5207\u6362\u7528\u6237\uFF0C\u53EA\u80FD\u83B7\u5F97\u7528\u6237\u7684\u6267\u884C\u6743\u9650\uFF0C\u4E0D\u80FD\u83B7\u5F97\u73AF\u5883\u53D8\u91CF\uFF09
<span class="token function">su</span> - \u7528\u6237\u540D\u79F0 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u5207\u6362\u5230\u7528\u6237\u5E76\u83B7\u5F97\u8BE5\u7528\u6237\u7684\u73AF\u5883\u53D8\u91CF\u53CA\u6267\u884C\u6743\u9650\uFF09
\u90FD\u7528su - \u5C31\u5B8C\u4E8B\u4E86
<span class="token function">su</span> - root

<span class="token comment">## passwd \u8BBE\u7F6E\u7528\u6237\u5BC6\u7801 \u8BBE\u7F6E\u7528\u6237\u5BC6\u7801</span>
 <span class="token function">passwd</span> gcy
<span class="token comment">## \u7ED9root\u8BBE\u7F6E</span>
<span class="token function">sudo</span> <span class="token function">passwd</span> 


<span class="token comment">## who \u67E5\u770B\u767B\u5F55\u7528\u6237\u4FE1\u606F \u67E5\u770B\u767B\u5F55\u7528\u6237\u4FE1\u606F</span>
<span class="token function">who</span>

<span class="token comment">## chmod\u6587\u4EF6\u6743\u9650</span>
<span class="token comment">## \u6587\u4EF6\u5C5E\u6027 \u6587\u4EF6\u5C5E\u6027</span>
https://www.runoob.com/wp-content/uploads/2014/06/363003_1227493859FdXT.png

\u6700\u5E38\u7528 \u4FEE\u6539\u6574\u4E2A\u6587\u4EF6\u5939\u91CC\u9762\u7684\u6240\u6709\u6587\u4EF6\u7684\u6240\u6709\u8005\u3001\u6240\u5C5E\u7EC4\u3001\u5176\u4ED6\u7528\u6237\u90FD\u5177\u6709\u53EF\u8BFB\u53EF\u5199\u53EF
\u6267\u884C\u6743\u9650
<span class="token function">chmod</span> -R <span class="token number">777</span> xiyou/


<span class="token comment">## find \u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55 \u67E5\u627E\u6587\u4EF6\u6216\u8005\u76EE\u5F55</span>
\u9009\u9879 \u529F\u80FD
-name<span class="token operator">&lt;</span>\u67E5\u8BE2\u65B9\u5F0F<span class="token operator">&gt;</span> \u6309\u7167\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u67E5\u627E\u6A21\u5F0F\u67E5\u627E\u6587\u4EF6
-user<span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span> \u67E5\u627E\u5C5E\u4E8E\u6307\u5B9A\u7528\u6237\u540D\u6240\u6709\u6587\u4EF6
-size<span class="token operator">&lt;</span>\u6587\u4EF6\u5927\u5C0F<span class="token operator">&gt;</span> \u6309\u7167\u6307\u5B9A\u7684\u6587\u4EF6\u5927\u5C0F\u67E5\u627E\u6587\u4EF6,\u5355\u4F4D\u4E3A:
b \u2014\u2014 \u5757\uFF08512 \u5B57\u8282\uFF09
c \u2014\u2014 \u5B57\u8282
w \u2014\u2014 \u5B57\uFF082 \u5B57\u8282\uFF09
k \u2014\u2014 \u5343\u5B57\u8282
M \u2014\u2014 \u5146\u5B57\u8282
G \u2014\u2014 \u5409\u5B57\u8282

 <span class="token function">find</span> xiyou/ -name <span class="token string">&quot;*.txt&quot;</span>
 <span class="token function">find</span> xiyou/ -user gcy
 <span class="token comment">## \u67E5\u627E\u5927\u4E8E200m\u7684\u6587\u4EF6\uFF08+n \u5927\u4E8E -n\u5C0F\u4E8E n\u7B49\u4E8E\uFF09</span>
 <span class="token function">find</span> /home -size +204800
 
 <span class="token operator">|</span> \u7BA1\u9053\u7B26  \u8868\u793A\u5C06\u524D\u4E00\u4E2A\u547D\u4EE4\u7684\u5904\u7406\u7ED3\u679C\u8F93\u51FA\u4F20\u9012\u7ED9\u540E\u9762\u7684\u547D\u4EE4\u5904\u7406
 <span class="token function">grep</span> \u8FC7\u6EE4\u67E5\u627E\u8FC7\u6EE4\u67E5\u627E
 
 
<span class="token comment">##  tar \u6253\u5305</span>
 \u9009\u9879 \u529F\u80FD
-c \u4EA7\u751F.tar \u6253\u5305\u6587\u4EF6
-v \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F
-f \u6307\u5B9A\u538B\u7F29\u540E\u7684\u6587\u4EF6\u540D
-z \u6253\u5305\u540C\u65F6\u538B\u7F29
-x \u89E3\u5305.tar \u6587\u4EF6
-C \u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55

<span class="token comment">## \u538B\u7F29\u52A0\u6253\u5305 \uFF0C\u7ED9\u538B\u7F29\u5305\u547D\u540D\u4E3Anew</span>
<span class="token function">tar</span> -zcvf new.tar.gz houge.txt bailongma.txt
<span class="token comment">## \u89E3\u538B\u5230\u5F53\u524D\u76EE\u5F55</span>
<span class="token function">tar</span> -zxvf houma.tar.gz
<span class="token comment">## \u89E3\u538B\u5230\u6307\u5B9A\u76EE\u5F55</span>
<span class="token function">tar</span> -zxvf xiyou.tar.gz -C /opt
ll /opt/

<span class="token comment">##  ps \u67E5\u770B \u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001 \u5F53\u524D\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001</span>
 <span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> xxx \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u67E5\u770B\u7CFB\u7EDF\u4E2D\u6240\u6709\u8FDB\u7A0B\uFF09
 <span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> xxx \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u53EF\u4EE5\u67E5\u770B\u5B50\u7236\u8FDB\u7A0B\u4E4B\u95F4\u7684\u5173\u7CFB\uFF09
 \u5982\u679C\u60F3\u67E5\u770B\u8FDB\u7A0B\u7684 CPU \u5360\u7528\u7387\u548C\u5185\u5B58\u5360\u7528\u7387\uFF0C\u53EF\u4EE5\u4F7F\u7528 aux<span class="token punctuation">;</span>
\u5982\u679C\u60F3\u67E5\u770B\u8FDB\u7A0B\u7684\u7236\u8FDB\u7A0B ID \u53EF\u4EE5\u4F7F\u7528 ef<span class="token punctuation">;</span>

<span class="token comment">## kill \u7EC8\u6B62\u8FDB\u7A0B </span>
<span class="token function">kill</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u8FDB\u7A0B\u53F7 \uFF08\u529F\u80FD\u63CF\u8FF0\uFF1A\u901A\u8FC7\u8FDB\u7A0B\u53F7\u6740\u6B7B\u8FDB\u7A0B\uFF09
-9 \u8868\u793A\u5F3A\u8FEB\u8FDB\u7A0B\u7ACB\u5373\u505C\u6B62

<span class="token function">kill</span> -9 <span class="token number">5102</span>
<span class="token function">killall</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u5C5E\u6027</p>`,4),v={href:"https://www.runoob.com/wp-content/uploads/2014/06/363003_1227493859FdXT.png",target:"_blank",rel:"noopener noreferrer"},m=t("363003_1227493859FdXT.png (451\xD7200) (runoob.com)"),u=s(`<h2 id="_2-\u5E38\u7528\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u5FEB\u6377\u952E" aria-hidden="true">#</a> 2.\u5E38\u7528\u5FEB\u6377\u952E</h2><p>ctrl+c \u505C\u6B62\u8FDB\u7A0B</p><p>ctrl+l \u6E05\u5C4F\uFF0C\u7B49\u540C\u4E8E clear\uFF1B</p><p>\u5F7B\u5E95\u6E05\u5C4F\u662F\uFF1Areset</p><h2 id="_3-grep-\u548C-\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-grep-\u548C-\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 3.grep \u548C | \u5E38\u7528\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## 1\u3001\u4ECE\u5355\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627E\u6307\u5B9A\u7684\u5B57\u7B26\u4E32</span>
<span class="token comment"># grep &quot;\u641C\u7D22\u5B57\u7B26&quot; \u6587\u4EF6\u540D</span>
<span class="token function">grep</span> <span class="token string">&quot;this&quot;</span> demo_file
<span class="token comment">## 2\u3001\u4ECE\u591A\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627E\u6307\u5B9A\u7684\u5B57\u7B26\u4E32</span>
<span class="token function">grep</span> <span class="token string">&quot;this&quot;</span> *.txt
<span class="token comment">## 3\u3001\u67E5\u8BE2\u4E14\u5FFD\u7565\u5927\u5C0F\u5199</span>
<span class="token function">grep</span> -i
<span class="token comment">## 4\u3001\u9012\u5F52\u641C\u7D22\u6240\u6709\u7684\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55</span>
<span class="token function">grep</span> -r
<span class="token comment">## 5 -c \u7EDF\u8BA1\u5B57\u7B26\u51FA\u73B0\u7684\u6B21\u6570</span>
<span class="token function">grep</span> -c
<span class="token comment">## 6 -n \u8F93\u51FA\u884C\u53F7</span>
<span class="token function">grep</span> -n
<span class="token comment">#7 -v \u53CD\u5411\u5339\u914D,\u4ECE\u672B\u5C3E\u5F00\u59CB\u627E</span>
<span class="token function">grep</span> -v \u7ECF\u5E38 -vn
<span class="token comment">#8 \u914D\u5408|\u4F7F\u7528</span>
\u5982
<span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> target
<span class="token function">ls</span> <span class="token operator">|</span> gerp <span class="token string">&quot;string&quot;</span>
<span class="token comment">#9 \u67E5\u627E\u591A\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token comment">#\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528grep\u67E5\u627E\u591A\u4E2A\u5355\u8BCD\u6216\u5B57\u7B26\u4E32\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528-e\u5F00\u5173\u6307\u5B9A\u591A\u4E2A\u6A21\u5F0F</span>
<span class="token function">grep</span> -e <span class="token string">&#39;Class 1&#39;</span> -e Todd Students.txt


<span class="token comment">#10 \u663E\u793A\u4E4B\u524D\u548C\u4E4B\u540E\u7684\u884C</span>
<span class="token comment">#\u5982\u679C\u9700\u8981\u66F4\u591Agrep\u8F93\u51FA\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u4F7F\u7528-c\u5F00\u5173\u5728\u6307\u5B9A\u7684\u641C\u7D22\u5B57\u7B26\u4E32\u524D\u540E\u663E\u793A\u4E00\u884C\uFF1A</span>
<span class="token function">grep</span> -c <span class="token number">1</span> string filename
<span class="token comment"># \u7ED3\u679C\u663E\u793A\u4E86 3\u884C \u5305\u62EC\u4E86\u524D\u540E\u5404\u4E00\u884C</span>

<span class="token comment"># 11\u5BF9\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F</span>
<span class="token comment">#\u5C06grep\u7684\u8F93\u51FA\u4F20\u9012\u7ED9sort\u547D\u4EE4\uFF0C\u4EE5\u6309\u67D0\u79CD\u987A\u5E8F\u5BF9\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u3002\u9ED8\u8BA4\u4E3A\u5B57\u6BCD\u987A\u5E8F\u3002</span>
 <span class="token function">grep</span> string filename <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## grep\u914D\u5408\u6B63\u5219\u8868\u8FBE\u5F0F</span>
<span class="token comment"># grep &#39;\u6B63\u5219&#39; \u6587\u4EF6  \u8981\u6CE8\u610F\u8F6C\u4E49</span>
<span class="token function">grep</span> <span class="token string">&#39;[0-9]\\{1,3\\}&#39;</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E38\u89C1\u6B63\u5219\u8868\u8FBE\u5F0F</p>`,8);function r(b,k){const a=d("ExternalLinkIcon");return i(),l("div",null,[p,n("p",null,[n("a",v,[m,c(a)])]),u])}var h=e(o,[["render",r],["__file","2.Linux\u6700\u5E38\u7528\u547D\u4EE4\u8BAD\u7EC3.html.vue"]]);export{h as default};
