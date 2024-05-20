<template><div><h1 id="upgrade-v5-x-to-v6-x" tabindex="-1"><a class="header-anchor" href="#upgrade-v5-x-to-v6-x"><span>Upgrade v5.x to v6.x</span></a></h1>
<h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h2>
<p>In your composer version, require <code v-pre>v6.0</code> version.</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"bpuig/laravel-subby"</span><span class="token operator">:</span> <span class="token string">"^v6.0"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<h3 id="new-lines-in-config" tabindex="-1"><a class="header-anchor" href="#new-lines-in-config"><span>New lines in config</span></a></h3>
<p>Added <code v-pre>plan_combinations</code> under <code v-pre>tables</code> and models:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>    <span class="token string single-quoted-string">'tables'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'plan_combinations'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'plan_combinations'</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Models</span>
    <span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'plan_combinations'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanCombination</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Added <code v-pre>payment_methods</code>, <code v-pre>'services'</code> now look should like this:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'services'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'payment_methods'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'free'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>PaymentMethods<span class="token punctuation">\</span>Free</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removed-lines-in-config" tabindex="-1"><a class="header-anchor" href="#removed-lines-in-config"><span>Removed lines in config:</span></a></h3>
<p>In <code v-pre>'services'</code>:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'services'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'schedule'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'default'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>ScheduleService</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h2>
<p>Publish v6 migrations</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.v6.0.0
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking changes</span></a></h2>
<h3 id="plan-subscription-schedule" tabindex="-1"><a class="header-anchor" href="#plan-subscription-schedule"><span>Plan subscription schedule</span></a></h3>
<ul>
<li>Method <code v-pre>usingService</code> is abandoned to use subscription's payment method.</li>
<li>There are no longer multiple services to process the schedule. There is only one and it uses payments set via config.</li>
</ul>
</div></template>


