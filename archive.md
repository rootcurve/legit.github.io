---
layout: default
---
{% for post in site.posts %}
	{% capture cmonth %}{{ post.date | date: "%B" }}{% endcapture %}
	{% unless lmonth == cmonth %}
		{% unless forloop.first %}</ul>{% endunless %}
		<h3>{{ cmonth }} {{ post.date | date: "%Y" }}</h3>
		<ul class="archive">
		{% assign lmonth = cmonth %}
	{% endunless %}
	{% if post.layout == 'link' %}
			<li><span class="time">{{ post.date | date: "%d" }}</span> <a href="{{ post.link_url }}">{{ post.title }}</a> <a href="{{ post.url }}" class="arch_permalink">&#8734;</a></li>
	{% else %}
			<li><span class="time">{{ post.date | date: "%d" }}</span> <a href="{{ post.url }}" class="innerlink">{{ post.title }}</a></li>
	{% endif %}
{% endfor %}
		</ul>
