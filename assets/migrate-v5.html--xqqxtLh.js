import{_ as n,c as e,o as s,b as a}from"./app-Vnr7Qnzh.js";const i={},t=a(`<h1 id="upgrade-v4-to-v5" tabindex="-1"><a class="header-anchor" href="#upgrade-v4-to-v5"><span>Upgrade v4 to v5</span></a></h1><h2 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h2><p>In your composer version, require v5.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;bpuig/laravel-subby&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><p>New lines in config:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;fallback_plan_tag&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="schedule-configuration" tabindex="-1"><a class="header-anchor" href="#schedule-configuration"><span>Schedule configuration</span></a></h3><p>Merge this lines into your current config.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">// Database Tables</span>
<span class="token string single-quoted-string">&#39;tables&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;plan_subscription_schedules&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;plan_subscription_schedules&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;models&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;plan_subscription_schedule&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flixtechs<span class="token punctuation">\\</span>Subby<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>PlanSubscriptionSchedule</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;services&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;schedule&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;default&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flixtechs<span class="token punctuation">\\</span>Subby<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>ScheduleService</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations"><span>Migrations</span></a></h2><p>Publish v5 migrations</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>subby.migrations.v5.0.0
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking changes</span></a></h2><h3 id="getdaysuntiltrialends-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getdaysuntiltrialends-method-in-subscription"><span><code>getDaysUntilTrialEnds</code> method in subscription</span></a></h3><p>Is now named <code>getTrialPeriodRemainingUsageIn(&#39;day&#39;)</code> and accepts new parameters.</p><h3 id="gettotaldurationindays-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#gettotaldurationindays-method-in-subscription"><span><code>getTotalDurationInDays</code> method in subscription</span></a></h3><p>Is now named <code>getSubscriptionTotalDurationIn(&#39;day&#39;)</code> and accepts new parameters.</p><h3 id="getdaysuntilends-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getdaysuntilends-method-in-subscription"><span><code>getDaysUntilEnds</code> method in subscription</span></a></h3><p>Is now named <code>getSubscriptionPeriodRemainingUsageIn(&#39;day&#39;)</code> and accepts new parameters.</p><h3 id="getremainingperiodproportion-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getremainingperiodproportion-method-in-subscription"><span><code>getRemainingPeriodProportion</code> method in subscription</span></a></h3><p>Is now named <code>getRemainingSubscriptionPeriodProportion()</code> and accepts new parameters.</p><h3 id="getremainingpriceprorate-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#getremainingpriceprorate-method-in-subscription"><span><code>getRemainingPriceProrate</code> method in subscription</span></a></h3><p>Is now named <code>getSubscriptionRemainingUsagePriceProrate()</code> and accepts new parameters.</p><h3 id="setnewperiod-method-in-subscription" tabindex="-1"><a class="header-anchor" href="#setnewperiod-method-in-subscription"><span><code>setNewPeriod</code> method in subscription</span></a></h3><p><code>setNewPeriod</code> has been removed.</p><h3 id="syncplan-method-which-also-relates-to-changeplan-in-subscription" tabindex="-1"><a class="header-anchor" href="#syncplan-method-which-also-relates-to-changeplan-in-subscription"><span><code>syncPlan</code> method (which also relates to <code>changePlan</code>) in subscription</span></a></h3><p><code>syncPlan</code> now does not renew the subscription</p>`,28),o=[t];function r(c,p){return s(),e("div",null,o)}const d=n(i,[["render",r],["__file","migrate-v5.html.vue"]]),u=JSON.parse('{"path":"/v5.x/install/migrate-v5.html","title":"Upgrade v4 to v5","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Composer","slug":"composer","link":"#composer","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[{"level":3,"title":"Schedule configuration","slug":"schedule-configuration","link":"#schedule-configuration","children":[]}]},{"level":2,"title":"Migrations","slug":"migrations","link":"#migrations","children":[]},{"level":2,"title":"Breaking changes","slug":"breaking-changes","link":"#breaking-changes","children":[{"level":3,"title":"getDaysUntilTrialEnds method in subscription","slug":"getdaysuntiltrialends-method-in-subscription","link":"#getdaysuntiltrialends-method-in-subscription","children":[]},{"level":3,"title":"getTotalDurationInDays method in subscription","slug":"gettotaldurationindays-method-in-subscription","link":"#gettotaldurationindays-method-in-subscription","children":[]},{"level":3,"title":"getDaysUntilEnds method in subscription","slug":"getdaysuntilends-method-in-subscription","link":"#getdaysuntilends-method-in-subscription","children":[]},{"level":3,"title":"getRemainingPeriodProportion method in subscription","slug":"getremainingperiodproportion-method-in-subscription","link":"#getremainingperiodproportion-method-in-subscription","children":[]},{"level":3,"title":"getRemainingPriceProrate method in subscription","slug":"getremainingpriceprorate-method-in-subscription","link":"#getremainingpriceprorate-method-in-subscription","children":[]},{"level":3,"title":"setNewPeriod method in subscription","slug":"setnewperiod-method-in-subscription","link":"#setnewperiod-method-in-subscription","children":[]},{"level":3,"title":"syncPlan method (which also relates to changePlan) in subscription","slug":"syncplan-method-which-also-relates-to-changeplan-in-subscription","link":"#syncplan-method-which-also-relates-to-changeplan-in-subscription","children":[]}]}],"git":{"updatedTime":1716242914000,"contributors":[{"name":"Borja Puig","email":"bdpuig@gmail.com","commits":5},{"name":"Given Ncube","email":"givenyslim12@gmail.com","commits":1},{"name":"Michal Borychowski","email":"807297+boryn@users.noreply.github.com","commits":1},{"name":"bpuig","email":"bdpuig@gmail.com","commits":1}]},"filePathRelative":"v5.x/install/migrate-v5.md"}');export{d as comp,u as data};
