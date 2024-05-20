<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h1>
<p>Install the package via composer:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require bpuig/laravel-subby
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Publish the configuration:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Publish migrations:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Migrate:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="upgrade-from-v5-x-to-dev" tabindex="-1"><a class="header-anchor" href="#upgrade-from-v5-x-to-dev"><span>Upgrade from v5.x to dev</span></a></h1>
<p>This package need to be upgraded version by version to apply database changes. See <RouteLink to="/v6.x/install/migrate-v6.html">migrate v6.x</RouteLink> for breaking
changes.</p>
<h1 id="attach-subscriptions-to-model" tabindex="-1"><a class="header-anchor" href="#attach-subscriptions-to-model"><span>Attach Subscriptions to model</span></a></h1>
<p><strong>Laravel Subby</strong> has been specially made for Eloquent. To add Subscription functionality to your User model just use
the <code v-pre>\Flixtechs\Subby\Traits\HasSubscriptions</code> trait like this:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Traits<span class="token punctuation">\</span>HasSubscriptions</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Auth<span class="token punctuation">\</span>User</span> <span class="token keyword">as</span> Authenticatable<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasSubscriptions</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That's it, we only have to use that trait in our User model or any other model! Now your users may subscribe to plans.
Then you can import package's models wherever you need them or extend them in your own models.</p>
</div></template>


