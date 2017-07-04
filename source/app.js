(function () {
  var options = INSTALL_OPTIONS
  var domain = options.showDomain && options.domain ? options.domain : 'auto'

  if (!options.id) return

  var tbb_ga = options.id;
  var tbb_cid = options.client_prefix;
  var tbb_domain = 'app-apac.thebookingbutton.com';
  ga('create', tbb_ga, {'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', [tbb_domain], false, true);
  ga('send', 'pageview');
  ga(function(tracker) {
  window.linker = window.linker || new window.gaplugins.Linker(tracker);
  if(document.referrer.indexOf(document.domain)!=7) {
  var e = document.createElement('iframe');
  e.src = window.linker.decorate('//'+tbb_domain+'/'+tbb_cid+'/ga_proxy');
  e.setAttribute('style', 'display:none');
  var b = document.getElementsByTagName('body')[0];
  b.appendChild(e);
  }
  });
  // Automatically apply TBB prefix to thebookingbutton links
  $(document).ready(function(){
  $('a[href*="'+tbb_domain+'"]').each(function(){
  this.href = this.href.replace(new RegExp(tbb_domain+'/properties', 'i'), tbb_domain+'/'+tbb_cid+'/properties');
 });
 });
}())
