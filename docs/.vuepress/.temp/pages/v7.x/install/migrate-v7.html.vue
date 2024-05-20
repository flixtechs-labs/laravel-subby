<template><div><h1 id="upgrade-v6-x-to-v7-x" tabindex="-1"><a class="header-anchor" href="#upgrade-v6-x-to-v7-x"><span>Upgrade v6.x to v7.x</span></a></h1>
<h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h2>
<p>In your composer version, require <code v-pre>v7.0</code> version.</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"bpuig/laravel-subby"</span><span class="token operator">:</span> <span class="token string">"^v7.0"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<h3 id="changed-lines" tabindex="-1"><a class="header-anchor" href="#changed-lines"><span>Changed lines</span></a></h3>
<p>Changed <code v-pre>plan_combinations</code> to <code v-pre>plan_combination</code> in models:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code>    <span class="token comment">// Models</span>
    <span class="token string single-quoted-string">'models'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'plan_combination'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>PlanCombination</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h2>
<p>Publish v7 migrations</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.v7
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


