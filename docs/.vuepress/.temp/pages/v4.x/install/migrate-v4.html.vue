<template><div><h1 id="upgrade-v3-to-v4" tabindex="-1"><a class="header-anchor" href="#upgrade-v3-to-v4"><span>Upgrade v3 to v4</span></a></h1>
<h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h2>
<p>In your composer version, require v4.</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"bpuig/laravel-subby"</span><span class="token operator">:</span> <span class="token string">"^4.0"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h2>
<p>Publish v4 migrations</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.v4.0.0
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<p>A new model has been introduced, add new table and model in your subby config. A new config <code v-pre>main_subscription_tag</code> has
been added.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'main_subscription_tag'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'main'</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">'tables'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'plan_subscription_features'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'plan_subscription_features'</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// Models</span>
    <span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'plan_subscription_feature'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanSubscriptionFeature</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


