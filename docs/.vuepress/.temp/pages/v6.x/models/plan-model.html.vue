<template><div><h1 id="plan-model" tabindex="-1"><a class="header-anchor" href="#plan-model"><span>Plan Model</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#create-a-plan">Create a Plan</router-link></li><li><router-link to="#get-plan-details">Get Plan details</router-link></li><li><router-link to="#trial-modes">Trial modes</router-link><ul><li><router-link to="#if-plan-has-trial">If plan has trial</router-link></li><li><router-link to="#if-plan-does-not-have-trial">If plan does not have trial</router-link></li><li><router-link to="#trial-period-time-related-functions">Trial period time related functions</router-link></li></ul></li><li><router-link to="#tiers">Tiers</router-link><ul><li><router-link to="#example">Example</router-link></li></ul></li><li><router-link to="#grace">Grace</router-link><ul><li><router-link to="#grace-related-functions">Grace related functions</router-link></li></ul></li><li><router-link to="#subscription-period-time-related-functions">Subscription period time related functions</router-link></li></ul></nav>
<p>This is the main model of the package, there is nothing without plans. After creating a plan, you
can <RouteLink to="/v6.x/models/plan-subscription-model.html#create-a-subscription">attach it to a subscription</RouteLink>.</p>
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
    <span class="token string single-quoted-string">'grace_period'</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'grace_interval'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'day'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'tier'</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'currency'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'EUR'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-plan-details" tabindex="-1"><a class="header-anchor" href="#get-plan-details"><span>Get Plan details</span></a></h2>
<p>You can query the plan for further details as follows:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or querying by tag</span>
<span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">getByTag</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'basic'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan features                </span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">features</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan subscriptions</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">subscriptions</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan combinations</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token property">combinations</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan is free</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">isFree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan has trial period</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">hasTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code v-pre>$plan-&gt;features</code> and <code v-pre>$plan-&gt;subscriptions</code> are collections, driven from relationships, and thus you can query
these relations as any normal Eloquent relationship. E.g. <code v-pre>$plan-&gt;features()-&gt;where('tag', 'social_profiles')-&gt;first()</code>
or <code v-pre>$plan-&gt;getFeatureByTag('social_profiles')</code>.</p>
<p>Also read:</p>
<ul>
<li><RouteLink to="/v6.x/models/plan-feature-model.html#get-plan-feature-value">Get Plan Feature value</RouteLink></li>
</ul>
<h2 id="trial-modes" tabindex="-1"><a class="header-anchor" href="#trial-modes"><span>Trial modes</span></a></h2>
<p>There are two available trial modes: <code v-pre>inside</code> or <code v-pre>outside</code>. This defines how the trial will be counted when renewal time
is due.</p>
<p><strong>USAGE WILL NOT BE CLEARED</strong> when user has had trial time. This is what gives sense to both methods.</p>
<p>When a <strong>new subscription</strong> to a plan is made:</p>
<h3 id="if-plan-has-trial" tabindex="-1"><a class="header-anchor" href="#if-plan-has-trial"><span>If plan has trial</span></a></h3>
<p>If plan has trial, subscriber does not have subscription but only a trial. Subscription period starts and ends at <code v-pre>null</code>
and this is considered subscription is not made. Because in a real case scenario, when a subscriber has a trial it does
not have a subscription yet, so the invoice period is made and charged after the trial has ended.</p>
<h4 id="renewal-when-trial-is-inside" tabindex="-1"><a class="header-anchor" href="#renewal-when-trial-is-inside"><span>Renewal when trial is &quot;inside&quot;</span></a></h4>
<p>If trial mode is <code v-pre>inside</code>; when trial ends and is renewed invoice period will have substracted the days of trial that
have been used.</p>
<p><em>Example:</em> 7 day trial in a 30 day subscription period.</p>
<ul>
<li>User uses 3 days, likes the app them and renews the subscription. <strong>Result:</strong> The next subscription renewal will be in
27 days.</li>
<li>User uses all 7 day trial. Forgets about the app and comes back a week later. <strong>Result:</strong> The next subscription
renewal will be in 23 days.</li>
</ul>
<p>In summary: this is <strong>NOT</strong> a free trial. User always ends up paying the full price for full period.</p>
<h4 id="renewal-when-trial-is-outside" tabindex="-1"><a class="header-anchor" href="#renewal-when-trial-is-outside"><span>Renewal when trial is &quot;outside&quot;</span></a></h4>
<p>If trial mode is <code v-pre>outside</code>; when trial ends and is renewed, invoice period will start at the moment it's renewed.</p>
<p><em>Example:</em> 7 day trial in a 30 day subscription period.</p>
<ul>
<li>User uses 3 days, likes the app them and renews the subscription. <strong>Result:</strong> The next subscription renewal will be in
30 days. User got 3 days for free.</li>
<li>User uses all 7 day trial. Forgets about the app and comes back a week later. <strong>Result:</strong> The next subscription
renewal will be in 30 days. User got 7 days for free.</li>
</ul>
<p>In summary: this is <strong>IS</strong> a free trial. User does not pay for the trial period, but for the next subscription period.</p>
<h3 id="if-plan-does-not-have-trial" tabindex="-1"><a class="header-anchor" href="#if-plan-does-not-have-trial"><span>If plan does not have trial</span></a></h3>
<p>If plan does not have trial, subscriber has subscription. Because when a plan does not have trial, a new subscription
activates a new invoicing period.</p>
<h3 id="trial-period-time-related-functions" tabindex="-1"><a class="header-anchor" href="#trial-period-time-related-functions"><span>Trial period time related functions</span></a></h3>
<p>You can get some information about duration of your trial with:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">getTrialTotalDurationIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Returns number of days trial lasts</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can use Carbon accepted intervals (in singular): <code v-pre>year</code>,<code v-pre>month</code>,<code v-pre>day</code>,<code v-pre>hour</code>,<code v-pre>minute</code>,<code v-pre>second</code>,<code v-pre>microsecond</code>...</p>
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
<p>What if you customize your user subscription and now it is somewhere in the middle between <strong>Intermediate</strong> and <strong>Pro</strong>?
You can change the tier to a number in between, so you know what to do when changing (downgrading) to existing
Intermediate or upgrading to Pro.</p>
<p>Comparing tier numbers, you can know which subscription or plan is superior to another.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token comment">// Example comparing current plan subscription to another plan</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-></span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token property">tier</span> <span class="token operator">&lt;</span> <span class="token variable">$newPlan</span><span class="token operator">-></span><span class="token property">tier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">myUpgradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">myDowngradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grace" tabindex="-1"><a class="header-anchor" href="#grace"><span>Grace</span></a></h2>
<p>Grace period is the extra time the subscription will be considered active after it has ended. By default is disabled,
you can set it when creating the plan with a <code v-pre>grace_period</code> and <code v-pre>grace_interval</code>. It will be inherited by new subscriptions
and also will be synchronized when using <code v-pre>syncPlan</code>.</p>
<h3 id="grace-related-functions" tabindex="-1"><a class="header-anchor" href="#grace-related-functions"><span>Grace related functions</span></a></h3>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">hasGrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Returns boolean indicating if plan has grace period</span>
<span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">getGraceTotalDurationIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Returns duration integer in set Carbon interval (second, day, month...)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="subscription-period-time-related-functions" tabindex="-1"><a class="header-anchor" href="#subscription-period-time-related-functions"><span>Subscription period time related functions</span></a></h2>
<p>You can get some information about duration of the subscription with:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token variable">$plan</span><span class="token operator">-></span><span class="token function">getSubscriptionTotalDurationIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Returns number of days subscription lasts</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can use Carbon accepted intervals (in singular): <code v-pre>year</code>,<code v-pre>month</code>,<code v-pre>day</code>,<code v-pre>hour</code>,<code v-pre>minute</code>,<code v-pre>second</code>,<code v-pre>microsecond</code>...</p>
</div></template>


