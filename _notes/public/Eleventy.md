---
date: 2021-11-04T10:22:48+01:00
updated: 2021-11-04T10:22:48+01:00
tags: geek
---
I am astonished. I was very casually wasting my time by reading about other SSGs, since Jekyll may be not dead, but for sure it will not be developed further in the future.

So, (just as randomly), I decided to create a new branch in my website’s repository:

```
git branch 11ty
git checkout 11ty
```

Believing everything would turn up broken, or that the build would file, I run:
```
brew install npm # install Node (and its package manager)
npm init -y # create package.json in pwd
npm install --save-dev @11ty/eleventy # Install Eleventy as a development dependency
npx @11ty/eleventy --serve				# build the website
```

With a great surprise, I found out my website to be working **greatly**. Out of the box. No changes. Still, output was not perfect. I needed to perform some refinements.

Creating `site.json` (same as `_config.yml`):
```json
{
    "title": "tommi.space",
    "email": "surfing@tommi.space",
    "description": "A virtual representation of the mess inside Tommi’s mind",
    "baseurl": "",
    "url": "https://tommi.space"
}
```

Furthermore, as explained in the quote below, in Eleventy layouts are considered as includes.

<blockquote>
    If we read about <a href="https://www.11ty.dev/docs/layouts/">layouts in Eleventy</a>, we’ll see that these are searched for in <code>_includes</code> by default, whereas they’re kept under <code>_layouts</code> in Jekyll. This is <a href="https://www.11ty.dev/docs/config/#directory-for-layouts-(optional)">mentioned</a> and can be configured, so we’ll create an <code>.eleventy.js</code> file to set the right path.</p>
    <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><br>    dir<span class="token operator">:</span> <span class="token punctuation">{</span><br>        layouts<span class="token operator">:</span> <span class="token string">"_layouts"</span><br>    <span class="token punctuation">}</span><br><span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>
</blockquote>