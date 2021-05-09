# -*- encoding: utf-8 -*-
# stub: jekyll-liquify 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-liquify".freeze
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brian Hedberg".freeze]
  s.date = "2019-04-22"
  s.email = "briansheahedberg@gmail.com".freeze
  s.homepage = "https://github.com/gemfarmer/jekyll-liquify".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.15".freeze
  s.summary = "A Jekyll filter that can parse Liquid in front matter.".freeze

  s.installed_by_version = "3.2.15" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<redcarpet>.freeze, ["~> 3.1"])
    s.add_runtime_dependency(%q<liquid>.freeze, [">= 2.5", "< 5.0"])
    s.add_development_dependency(%q<jekyll>.freeze, [">= 2.0", "< 5.0"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.6"])
  else
    s.add_dependency(%q<redcarpet>.freeze, ["~> 3.1"])
    s.add_dependency(%q<liquid>.freeze, [">= 2.5", "< 5.0"])
    s.add_dependency(%q<jekyll>.freeze, [">= 2.0", "< 5.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.6"])
  end
end
