# -*- encoding: utf-8 -*-
# stub: jekyll-toc 0.17.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-toc".freeze
  s.version = "0.17.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["toshimaru".freeze, "torbjoernk".freeze]
  s.date = "2021-01-27"
  s.description = "Jekyll (Ruby static website generator) plugin which generates a Table of Contents for the page.".freeze
  s.email = "me@toshimaru.net".freeze
  s.homepage = "https://github.com/toshimaru/jekyll-toc".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4".freeze)
  s.rubygems_version = "3.2.15".freeze
  s.summary = "Jekyll Table of Contents plugin".freeze

  s.installed_by_version = "3.2.15" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.9"])
    s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.10"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.9"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.10"])
  end
end
