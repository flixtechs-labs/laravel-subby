<template><div><h1 id="plan-model" tabindex="-1"><a class="header-anchor" href="#plan-model"><span>Plan Model</span></a></h1>
<p>This is the main model of the package, there is nothing without plans.</p>
<h2 id="create-a-plan" tabindex="-1"><a class="header-anchor" href="#create-a-plan"><span>Create a Plan<a name="create-plan"></a></span></a></h2>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Plan</span><span class="token punctuation">;</span>

<span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'tag'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'basic'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Basic Plan'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'description'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'For small businesses'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'price'</span> <span class="token operator">=></span> <span class="token number">9.99</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'signup_fee'</span> <span class="token operator">=></span> <span class="token number">1.99</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'invoice_period'</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'invoice_interval'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'month'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'trial_period'</span> <span class="token operator">=></span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'trial_interval'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'tier'</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'currency'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'EUR'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-plan-details" tabindex="-1"><a class="header-anchor" href="#get-plan-details"><span>Get Plan details<a name="get-plan-details"></a></span></a></h2>
<p>You can query the plan for further details as follows:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan features                </span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">features</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan subscriptions</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">subscriptions</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan is free</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">isFree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan has trial period</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">hasTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan has grace period</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">hasGrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code v-pre>$plan-&gt;features</code> and <code v-pre>$plan-&gt;subscriptions</code> are collections, driven from relationships, and thus you can query
these relations as any normal Eloquent relationship. E.g. <code v-pre>$plan-&gt;features()-&gt;where('tag', 'social_profiles')-&gt;first()</code>.</p>
<p>Also read:</p>
<ul>
<li><RouteLink to="/v3.x/models/plan-feature-model.html">Get Plan Feature value</RouteLink></li>
</ul>
</div></template>


