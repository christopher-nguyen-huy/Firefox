//Hide one click search button:
user_pref("browser.search.showOneOffButtons",false);

//Put cache on RAM:
user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.memory.enable",true);
user_pref("browser.cache.memory.max_entry_size",-1);
user_pref("browser.cache.disk.parent_directory","/tmp/firefox");
//	Not sure about this last one here
//	doesn't seem like this works on windows

//Reduce page loading delay:
//According to logicalincrements.com/firefox:
user_pref("nglayout.initialpaint.delay",0);
user_pref("content.interrupt.parsing",true);
user_pref("content.notify.ontimer",true);
user_pref("content.max.tokenizing.time",100000);
user_pref("content.notify.backoffcount",-1);
user_pref("content.notify.interval",100000);
user_pref("content.switch.threshold",2000000);
//According to me(in the past lol):
//Load large pages faster:
user_pref("content.notify.interval",500000);
//	(0.5s)
user_pref("content.notify.ontimer",true);
//Ignore interrupts:
user_pref("content.switch.threshold",250000);
//	(0.25s)
user_pref("content.interrupt.parsing",false);


//Disable Thumbnails in about:newtab
user_pref("browser.pagethumbnails.capturing_disabled",true);
user_pref("pageThumbs.enabled",false);
//	You may need to delete the thumbnails folder in the Firefox profile folder to remove already stored icons.
//	You can use this button to go to the Firefox profile folder:
//		Help > Troubleshooting Information > Profile Directory: Show Folder (Open Directory) 
//	
//Remove URL bar greying after domain:
user_pref("browser.urlbar.formatting.enabled",false);

//Stop URL trimming:
user_pref("browser.urlbar.trimURLs",false);
//	Displays http://

//Disable Ctrl-Tab previews:
user_pref("browser.ctrlTab.previews",false);

//Addons:
//Disable compatibility checking
user_pref("extensions.checkCompatibility",false);

//AltClick-Save:
user_pref("browser.altClickSave",true);

//Imageview Background color:
user_pref("browser.display.standalone_images.background_color","#000000");
//	(for black)
user_pref("browser.display.standalone_images.background_color","#FFFFFF");
//	(for white)
//	
//Disable ipv6:
user_pref("network.dns.disableIPv6",true);

//DNS optimisation:
user_pref("network.dnsCacheEntries",512);
user_pref("network.dnsCacheExpiration",3600);

//Hover over link to get url delay
//	Not sure about this one
user_pref("browser.overlink-delay",40);

//autoclear downloads:
user_pref("browser.download.manager.retention",0);
//	2=keep forever
//	1=clear on firefox exit
//	0=clear on download complete
//	
//Disable addon install timer:
user_pref("security.dialog_enable_delay",0);

//Connections Boosting:
user_pref("network.http.max-connections",48 or 96);
user_pref("network.http.max-persistent-connections-per-server",12);
user_pref("network.http.max-connections-per-server",24);
//Logicalincrements version:
user_pref("network.http.pipelining.maxrequests",64);
user_pref("network.http.max-connections",512);
user_pref("network.http.max-persistent-connections-per-server",32);


//tab minimal shrink size width:
user_pref("browser.tabs.tabMinWidth",75);
//	(pixels)
//	
//Disable browser pdf:
user_pref("pdfjs.disabled",true);

//Tab open at the end:
user_pref("browser.tabs.insertRelatedAfterCurrent",false);

//Disable tab animation
user_pref("browser.tabs.animate",false);

//Smart address bar suggestion number:
user_pref("browser.urlbar.maxRichResults",any number);
//	-1 to disable

//Disable tab preview:
user_pref("browser.allTabs.previews",false);
user_pref("browser.ctrlTab.previews",false);

//New blank tab:
user_pref("browser.newtab.url","about:blank");

//Pipelining:
//	Everything in this section might not work anymore
user_pref("network.http.pipelining.firstrequest",true);
user_pref("network.http.pipelining",true);
user_pref("network.http.pipelining.ssl",true);
user_pref("network.http.proxy.pipelining",true);
user_pref("network.http.pipelining.maxrequests",20-40);
//	Who knows what's going on here
//	
//Disable Geolocation:
user_pref("geo.enabled",false);
//	Might not be a good idea
//	Everything that was supposed to return a .ca version in google returns the .com version

//Turn off file virus-scan after download:
user_pref("browser.download.manager.scanWhenDone",false);

//Override the useragent to most common useragent (not needed with Blender/UA Switcher):
//New > string: general.useragent.override ->
//Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0

//Disable prefetching:
//	(preloading of pages), which lowers RAM usage
user_pref("network.prefetch-next",false);

//Remove submenu slide delay:
user_pref("ui.submenuDelay",0);

//Set a "do-not-track" header to tell sites not to track browsing habits:
user_pref("privacy.donottrackheader.enabled",true);

//Disable Google Blacklists:
user_pref("browser.safebrowsing.enabled",false);
user_pref("browser.safebrowsing.maleware.enabled",false);

//Disable pings:
//	why?
user_pref("browser.send_pings",false);
user_pref("browser.send_pings.require_same_host",true);

//Disable keywords:
//	why?
user_pref("keyword.enabled",false);

//Disable certificates:
user_pref("browser.ssl_override_behavior",2);

//Disable DNS proxy bypass:
user_pref("network.proxy.socks_remote_dns",true);

//Hide favicons:
//	(those little icons beside bookmarks and in url bar)
user_pref("browser.chrome.favicons",false);
user_pref("browser.chrome.site_icons",false);

//Set notepad++ as external editor:
user_pref("view_source.editor.external",true);
user_pref("view_source.editor.path","C:\Program Files (x86)\Notepad++\notepad++.exe");
user_pref("view_source.editor.args","-multiInst -nosession -noPlugin");

//Paste clipboard with middle click:
user_pref("middlemouse.paste",true);

//Always force search to open in new tab:
//	not sure I'll ever use this one
user_pref("browser.search.openintab",true);
//	
//Disable WebRTC:
//	because it will leak your real ip address even through a VPN
user_pref("media.peerconnection.enabled",false);

//Change user agent string:
user_pref("general.useragent.override",youruseragent);
//	ex: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022).
//	
//Disable Extention updates:
user_pref("extensions.update.enabled",false);

//Disable Firefox Hello:
user_pref("loop.enabled",false);

//Change addressbar search engine:
user_pref("keyword.url","http://duckduckgo.com/?q=");

//Disable firefox plugin version checking (flash)
user_pref("extensions.blocklist.enabled",false);

//Disable tooltips
user_pref("browser.chrome.toolbar_tips",false);

//Prevent sites altering browser history
user_pref("browser.history.allow*State",false);

//Prevent sites from altering context menu
user_pref("dom.event.contextmenu.enabled",true);

//Prevent plugins from using external scripts with XPCOM or XPCONNECT
user_pref("security.xpconnect.plugin.unrestricted",false);

//Prevent websites from removing the toolbar
user_pref("dom.disable_window_open_feature.toolbar",true);

//Prevent websites from removing the title bar
user_pref("dom.disable_window_open_feature.titlebar",true);

//Prevent websites from removing scroll bars
user_pref("dom.disable_window_open_feature.scrollbars",true);

//Prevent websites from removing the personal bar
user_pref("dom.disable_window_open_feature.personalbar",true);

//Prevent websites from removing the menu bar
user_pref("dom.disable_window_open_feature.menubar",true);

//Disable caching SSL sites
user_pref("browser.cache.disk_cache_ssl",false);

//Access Keys
//	Access key
user_pref("ui.key.contentAccess",number);
//		ui.key.generalAccessKey = -1 msut be enabled
//	Menu activate key
user_pref("ui.key.chromeAccess",number);
//	Numbers:
//		0 = disabled
//		1 = shift
//		2 = ctrl
//		3 = ctrl + shift
//		4 = alt
//		5 = alt + shift
//		8 = meta