<template><div><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h1>
<p>All notable changes to <code v-pre>laravel-subby</code> will be documented in this file.</p>
<h2 id="_3-0-2" tabindex="-1"><a class="header-anchor" href="#_3-0-2"><span>3.0.2</span></a></h2>
<h2 id="fix" tabindex="-1"><a class="header-anchor" href="#fix"><span>Fix</span></a></h2>
<ul>
<li>Update docs broken link</li>
<li>Remove art from repo, use external url</li>
</ul>
<h2 id="_3-0-1" tabindex="-1"><a class="header-anchor" href="#_3-0-1"><span>3.0.1</span></a></h2>
<h3 id="fix-1" tabindex="-1"><a class="header-anchor" href="#fix-1"><span>Fix</span></a></h3>
<ul>
<li>Removed whitespace at the end of migration filename</li>
</ul>
<h2 id="_3-0-0" tabindex="-1"><a class="header-anchor" href="#_3-0-0"><span>3.0.0</span></a></h2>
<h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking Changes</span></a></h3>
<ul>
<li>Rename <code v-pre>User</code> to <code v-pre>Subscriber</code> for a more generic use. Was not thought that a subscriber could be a customer, team,
account... etc</li>
<li><code v-pre>ofUser()</code> method in <code v-pre>PlanSubscription</code> now is <code v-pre>ofSubscriber()</code></li>
</ul>
<p>Changed method names to avoid confusion with possible scopes.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscribedTo</span><span class="token punctuation">(</span><span class="token variable">$planId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">active</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">canceled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">ended</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">onTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now are:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">isSubscribedTo</span><span class="token punctuation">(</span><span class="token variable">$planId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">isCanceled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasEnded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">isOnTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="changes" tabindex="-1"><a class="header-anchor" href="#changes"><span>Changes</span></a></h3>
<ul>
<li>Default value in <em>plans</em> table for <code v-pre>invoice_period</code> is now 1.</li>
<li>Removed softDeletes</li>
</ul>
</div></template>


