---
layout: page
title: Archive
published: false
---

{% for post in site.posts %}

<div class="archive-item">
      <span class="post-date archive-date">{{ post.date | date: "%-d %B %Y" }}</span>
      <a href="{{ post.url }}" class="archive-title">
        {{ post.title }}
      </a>
    </div>
{% endfor %}
