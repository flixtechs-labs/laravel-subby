import{_ as o,r as i,c as l,a as n,e as s,d as e,w as t,b as p,o as r}from"./app-Vnr7Qnzh.js";const c={},u=n("h1",{id:"plan-model",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plan-model"},[n("span",null,"Plan Model")])],-1),d=p(`<h2 id="create-a-plan" tabindex="-1"><a class="header-anchor" href="#create-a-plan"><span>Create a Plan</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Flixtechs<span class="token punctuation">\\</span>Subby<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Plan</span><span class="token punctuation">;</span>

<span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;tag&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;basic&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Basic Plan&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;For small businesses&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">9.99</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;signup_fee&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1.99</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;invoice_period&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;invoice_interval&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;month&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;trial_period&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;trial_interval&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;day&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;tier&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;currency&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;EUR&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-plan-details" tabindex="-1"><a class="header-anchor" href="#get-plan-details"><span>Get Plan details</span></a></h2><p>You can query the plan for further details as follows:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or querying by tag</span>
<span class="token variable">$plan</span> <span class="token operator">=</span> <span class="token class-name static-context">Plan</span><span class="token operator">::</span><span class="token function">getByTag</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;basic&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan features                </span>
<span class="token variable">$plan</span><span class="token operator">-&gt;</span><span class="token property">features</span><span class="token punctuation">;</span>

<span class="token comment">// Get all plan subscriptions</span>
<span class="token variable">$plan</span><span class="token operator">-&gt;</span><span class="token property">subscriptions</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan is free</span>
<span class="token variable">$plan</span><span class="token operator">-&gt;</span><span class="token function">isFree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the plan has trial period</span>
<span class="token variable">$plan</span><span class="token operator">-&gt;</span><span class="token function">hasTrial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code>$plan-&gt;features</code> and <code>$plan-&gt;subscriptions</code> are collections, driven from relationships, and thus you can query these relations as any normal Eloquent relationship. E.g. <code>$plan-&gt;features()-&gt;where(&#39;tag&#39;, &#39;social_profiles&#39;)-&gt;first()</code> or <code>$plan-&gt;getFeatureByTag(&#39;social_profiles&#39;)</code>.</p><p>Also read:</p>`,7),g=p(`<h2 id="tiers" tabindex="-1"><a class="header-anchor" href="#tiers"><span>Tiers</span></a></h2><p>The use of tiers is <strong>optional</strong>. Usually a tier is a &quot;level&quot; of subscription.</p><p>It helps with upgrading or downgrading because usually an upgrade is changed, billed and renewed instantly, and a downgrade is changed and billed at the end of period ( see <a href="https://github.com/bpuig/laravel-subby-schedule" target="_blank" rel="noopener noreferrer">laravel-subby-schedule</a>).</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>The way it&#39;s thought is:</p><p>You have 3 plans: <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Pro</strong>. How do you now which is better than the other? You can look at the price.</p><p>But... what if there is a promo during some time and the price of <strong>Intermediate</strong> is lower now than <strong>Basic</strong> will be next month when there is no promo? When you change the subscription plan from your promo <strong>Intermediate</strong> to <strong>Basic</strong> normally would be a downgrade, but now prices are reversed and action is an upgrade. Weird, huh?</p><p>What if you customize your user subscription and now its somewhere in the middle between <strong>Intermediate</strong> and <strong>Pro</strong>? You can change the tier to a number in between, so you know what to do when changing (downgrading) to existing Intermediate or upgrading to Pro.</p><p>Comparing tier numbers, you can know which subscription or plan is superior to another.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">// Example comparing current plan subscription to another plan</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">tier</span> <span class="token operator">&lt;</span> <span class="token variable">$newPlan</span><span class="token operator">-&gt;</span><span class="token property">tier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">myUpgradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">myDowngradeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(m,v){const a=i("RouteLink");return r(),l("div",null,[u,n("p",null,[s("This is the main model of the package, there is nothing without plans. After creating a plan, you can "),e(a,{to:"/v4.x/models/plan-subscription-model.html#create-a-subscription"},{default:t(()=>[s("attach it to a subscription")]),_:1}),s(".")]),d,n("ul",null,[n("li",null,[e(a,{to:"/v4.x/models/plan-feature-model.html#get-plan-feature-value"},{default:t(()=>[s("Get Plan Feature value")]),_:1})])]),g])}const b=o(c,[["render",k],["__file","plan-model.html.vue"]]),f=JSON.parse('{"path":"/v4.x/models/plan-model.html","title":"Plan Model","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Create a Plan","slug":"create-a-plan","link":"#create-a-plan","children":[]},{"level":2,"title":"Get Plan details","slug":"get-plan-details","link":"#get-plan-details","children":[]},{"level":2,"title":"Tiers","slug":"tiers","link":"#tiers","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]}],"git":{"updatedTime":1716242914000,"contributors":[{"name":"Given Ncube","email":"givenyslim12@gmail.com","commits":1},{"name":"bpuig","email":"bdpuig@gmail.com","commits":1}]},"filePathRelative":"v4.x/models/plan-model.md"}');export{b as comp,f as data};
