<template><div><h1 id="plan-model" tabindex="-1"><a class="header-anchor" href="#plan-model"><span>Plan Model</span></a></h1>
<p>This is the main model of the package, there is nothing without plans. After creating a plan, you
can <RouteLink to="/v4.x/models/plan-subscription-model.html#create-a-subscription">attach it to a subscription</RouteLink>.</p>
<h2 id="create-a-plan" tabindex="-1"><a class="header-anchor" href="#create-a-plan"><span>Create a Plan</span></a></h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-plan-details" tabindex="-1"><a class="header-anchor" href="#get-plan-details"><span>Get Plan details</span></a></h2>
<p>You can query the plan for further details as follows:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or querying by tag</span>
<span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">getByTag</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'basic'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan features                </span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">features</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan subscriptions</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">subscriptions</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan is free</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">isFree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan has trial period</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">hasTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code v-pre>$plan-&gt;features</code> and <code v-pre>$plan-&gt;subscriptions</code> are collections, driven from relationships, and thus you can query
these relations as any normal Eloquent relationship. E.g. <code v-pre>$plan-&gt;features()-&gt;where('tag', 'social_profiles')-&gt;first()</code>
or <code v-pre>$plan-&gt;getFeatureByTag('social_profiles')</code>.</p>
<p>Also read:</p>
<ul>
<li><RouteLink to="/v4.x/models/plan-feature-model.html#get-plan-feature-value">Get Plan Feature value</RouteLink></li>
</ul>
<h2 id="tiers" tabindex="-1"><a class="header-anchor" href="#tiers"><span>Tiers</span></a></h2>
<p>The use of tiers is <strong>optional</strong>. Usually a tier is a &quot;level&quot; of subscription.</p>
<p>It helps with upgrading or downgrading because usually an upgrade is changed, billed and renewed instantly, and a
downgrade is changed and billed at the end of period (
see <a href="https://github.com/bpuig/laravel-subby-schedule" target="_blank" rel="noopener noreferrer">laravel-subby-schedule</a>).</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p>The way it's thought is:</p>
<p>You have 3 plans: <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Pro</strong>. How do you now which is better than the other? You can look
at the price.</p>
<p>But... what if there is a promo during some time and the price of <strong>Intermediate</strong> is lower now than <strong>Basic</strong> will be
next month when there is no promo? When you change the subscription plan from your promo <strong>Intermediate</strong> to <strong>Basic</strong>
normally would be a downgrade, but now prices are reversed and action is an upgrade. Weird, huh?</p>
<p>What if you customize your user subscription and now its somewhere in the middle between <strong>Intermediate</strong> and <strong>Pro</strong>?
You can change the tier to a number in between, so you know what to do when changing (downgrading) to existing
Intermediate or upgrading to Pro.</p>
<p>Comparing tier numbers, you can know which subscription or plan is superior to another.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token comment">// Example comparing current plan subscription to another plan</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token property">tier</span> <span class="token operator">&lt;</span> <span class="token variable">$newPlan</span><span class="token operator">-></span><span class="token property">tier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">myUpgradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">myDowngradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


