<template><div><h1 id="payment-services" tabindex="-1"><a class="header-anchor" href="#payment-services"><span>Payment services</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#usage">Usage</router-link></li><li><router-link to="#create-a-payment-service">Create a payment service</router-link><ul><li><router-link to="#create-the-service">Create the service</router-link></li><li><router-link to="#make-the-service-available">Make the service available</router-link></li></ul></li></ul></nav>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>A payment service is a class that processes the payment defined in the subscription column <code v-pre>payment_method</code>.</p>
<h2 id="create-a-payment-service" tabindex="-1"><a class="header-anchor" href="#create-a-payment-service"><span>Create a payment service</span></a></h2>
<h3 id="create-the-service" tabindex="-1"><a class="header-anchor" href="#create-the-service"><span>Create the service</span></a></h3>
<p>Create a new laravel class in your project and implement <code v-pre>Flixtechs\Subby\Contracts\PaymentMethodService</code>. Looking at
the <code v-pre>Free</code>
service would be a good starting point.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>PaymentMethods</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>PaymentMethodService</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Free</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentMethodService</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Charge desired amount
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">charge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Nothing is charged, no exception is raised</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-your-methods" tabindex="-1"><a class="header-anchor" href="#create-your-methods"><span>Create your methods</span></a></h4>
<p>In the following code, see an example of what could be a payment method service for a fictional credit card payment
processor.</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">PaymentMethods</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>PaymentMethodService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Bank<span class="token punctuation">\</span>BankPackages<span class="token punctuation">\</span>YourPaymentProcessor</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Traits<span class="token punctuation">\</span>IsPaymentMethod</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreditCard</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentMethodService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">IsPaymentMethod</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token variable">$amount</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$currency</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$creditCard</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * You would need to retrieve whatever data you need from $this->subscription relationships
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">retrieveCreditCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">creditCard</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">subscription</span><span class="token operator">-></span><span class="token property">user</span><span class="token operator">-></span><span class="token function">creditCards</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token property">default</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Charge desired amount with your favorite bank
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">charge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$processor</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourPaymentProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$processor</span><span class="token operator">-></span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'MERCHANT_CURRENCY'</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">currency</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$processor</span><span class="token operator">-></span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'MERCHANT_AMOUNT'</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">amount</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$processor</span><span class="token operator">-></span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'MERCHANT_CARD'</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">creditCard</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$processor</span><span class="token operator">-></span><span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="make-the-service-available" tabindex="-1"><a class="header-anchor" href="#make-the-service-available"><span>Make the service available</span></a></h3>
<p>In your config file, add a name and the path of your new payment method:</p>
<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'services'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'schedule'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>ScheduleService</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'renewal'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>RenewalService</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'payment_methods'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'free'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Flixtechs<span class="token punctuation">\</span>Subby<span class="token punctuation">\</span>Services<span class="token punctuation">\</span>PaymentMethods<span class="token punctuation">\</span>Free</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'credit_card'</span> <span class="token operator">=></span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>PaymentMethods<span class="token punctuation">\</span>CreditCard</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


