(function(g){var window=this;'use strict';var Fjb=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");c===-1&&(c=a.length);var d=a[0]==="-"?"-":"";d&&(a=a.substring(1));return d+(0,g.Q9a)("0",Math.max(0,b-c))+a},Gjb=function(){return{I:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},Hjb=function(){return{I:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},Jjb=function(a){typeof a==="number"?(this.date=Ijb(a,0,1),y5(this,1)):g.Qa(a)?(this.date=Ijb(a.getFullYear(),a.getMonth(),a.getDate()),y5(this,a.getDate())):(this.date=new Date(g.Ya()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),y5(this,a))},Ijb=function(a,b,c){b=new Date(a,b,c);
a>=0&&a<100&&b.setFullYear(b.getFullYear()-1900);return b},y5=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},z5=function(a,b){g.fS.call(this,a,{I:"div",
S:"ytp-reminder-menu",W:{role:"menu",tabindex:"-1"},V:[{I:"div",S:"ytp-reminder-menu-contents",V:[{I:"div",S:"ytp-reminder-menu-items"}]}]},100,!0);this.j=b;this.C=[];this.menuPopupRenderer=void 0;this.items=this.Ea("ytp-reminder-menu-items");this.hide()},Kjb=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},A5=function(a){g.T.call(this,{I:"div",
V:[{I:"button",La:["ytp-offline-slate-button","ytp-button"],V:[{I:"div",S:"ytp-offline-slate-button-icon",va:"{{icon}}"},{I:"div",S:"ytp-offline-slate-button-text",va:"{{text}}"}]}]});this.J=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.B=void 0;this.D=this.j=null;(this.G=this.Ea("ytp-offline-slate-button"))&&this.T(this.G,"click",this.K);this.hide()},Mjb=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&g.Q(c,Ljb)?a.upcomingEventReminderButtonRenderer=g.Q(c,Ljb):c&&g.Q(c,Ljb)||(a.upcomingEventReminderButtonRenderer=null);B5(a)},B5=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.ox(b.toggledText):"";a.update({text:c,icon:Njb(b.toggledIcon)})}else c=b.defaultText?g.ox(b.defaultText):"",a.update({text:c,icon:Njb(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=Ojb(a))?(c=b.text?g.ox(b.text):"",a.update({text:c,icon:Njb(b.icon)}),a.show()):a.hide():a.hide()},Qjb=function(a,b,c){a.D||(a.D=new g.$u(a.J.U().jl));
var d={context:g.ju(a.D.config_||g.iu())};g.ww()&&(d.context.clientScreenNonce=g.ww());d.params=c;g.av(a.D,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.B&&(a.upcomingEventReminderButtonRenderer.currentState=a.B,a.B=void 0)},
onError:function(){Pjb(a)},
onTimeout:function(){Pjb(a)}})},Pjb=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,B5(a)):a.upcomingEventReminderButtonRenderer&&(a.B=void 0,B5(a))},Njb=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return Gjb();case "NOTIFICATIONS_NONE":return Hjb();case "NOTIFICATIONS_ACTIVE":return g.wx();default:return null}},Ojb=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.B||a.upcomingEventReminderButtonRenderer.currentState;a=g.w(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=g.Q(c.value,Rjb))&&c.state===b&&c.button&&g.Q(c.button,g.nI))return g.Q(c.button,g.nI);return null},Sjb=function(a){g.T.call(this,{I:"div",
S:"ytp-offline-slate",V:[{I:"div",S:"ytp-offline-slate-background"},{I:"div",S:"ytp-offline-slate-bar",V:[{I:"span",S:"ytp-offline-slate-icon",V:[{I:"svg",W:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",W:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{I:"circle",W:{cx:"12",cy:"12",r:"3"}}]}]},{I:"span",S:"ytp-offline-slate-messages",V:[{I:"div",S:"ytp-offline-slate-main-text",W:{"aria-label":"{{label}}"},va:"{{mainText}}"},{I:"div",S:"ytp-offline-slate-subtitle-text",va:"{{subtitleText}}"}]},{I:"span",S:"ytp-offline-slate-buttons"}]},{I:"button",La:["ytp-offline-slate-close-button","ytp-button"],V:[g.sx()]},{I:"button",La:["ytp-offline-slate-open-button","ytp-button"],V:[g.rx()]}]});var b=this;this.api=a;this.j=this.B=null;this.background=this.Ea("ytp-offline-slate-background");
this.C=this.Ea("ytp-offline-slate-bar");this.G=new g.Wo(function(){g.dp(b.C,"ytp-offline-slate-bar-fade")},15E3);
this.K=!1;this.D=new g.Wo(function(){g.dp(b.element,"ytp-offline-slate-collapsed")},15E3);
g.P(this,this.D);g.P(this,this.G);this.countdownTimer=new g.Wo(this.S3,1E3,this);this.T(a,"presentingplayerstatechange",this.X3);this.T(a,"livestatedata",this.Sa);a=this.Ea("ytp-offline-slate-close-button");this.T(a,"click",function(){g.dp(b.element,"ytp-offline-slate-collapsed")});
a=this.Ea("ytp-offline-slate-open-button");this.T(a,"click",function(){g.fp(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Sa(a);a=this.api.getPresentingPlayerType()===8&&!this.getVideoData().Fm;var c=this.api.getPresentingPlayerType()===8;g.hp(this.element,"ytp-offline-slate-premiere-trailer",a);g.hp(this.element,"ytp-offline-slate-hide-background",c)},Tjb=function(a,b,c){if(b){var d=b.subtitleText!=null?g.ox(b.subtitleText):"";
c=c?c:b.mainText!=null?g.ox(b.mainText):"";var e,f,h,l;b=(l=(e=b.mainText)==null?void 0:(f=e.accessibility)==null?void 0:(h=f.accessibilityData)==null?void 0:h.label)!=null?l:c;a.update({mainText:c,subtitleText:d,label:b});g.hp(a.element,"ytp-offline-slate-single-text-line",!d);g.hp(a.C,"ytp-offline-slate-bar-hidden",!c&&!d)}},C5=function(a,b){var c=(0,g.S)();
this.module="heartbeat";this.trigger=a;this.j=b;this.C=c},Zjb=function(a){g.UX.call(this,a);
var b=this;this.N=!1;this.Z=0;this.G=!1;this.B=new g.Wo(function(){Ujb(b)},0);
this.j=this.heartbeatParams=null;this.D=!1;this.K=new g.ci(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.oa=new g.$u(void 0);this.attestationResponse=Promise.resolve(void 0);this.Y=Promise.resolve(void 0);this.utcOffsetMinutes=-(new Jjb).getTimezoneOffset();this.C=new g.xE(this);g.P(this,this.B);g.P(this,this.C);Vjb(this);Wjb(this);this.C.T(a,"heartbeatparams",this.UG);this.C.T(a,"presentingplayerstatechange",this.r5);this.C.T(a,"videoplayerreset",this.s5);this.C.T(a,g.$C("heartbeat"),
this.onCueRangeEnter);this.D&&this.j&&Xjb(this,void 0,this.j);var c=new g.YC(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.YC(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.jf([c,d]);Yjb(this)},Yjb=function(a){var b=a.getVideoData();
!b.L("use_rta_only_for_player")&&b.xl&&(b=b.botguardData)&&g.XK(b,a.player.U())},$jb=function(a){var b,c;
return g.J(function(d){if(d.j==1)return g.F(d,g.zua(),2);if(!d.B)return a.sequenceNumber>=3?d.return({error:"ATTESTATION_ERROR_VM_INTERNAL_ERROR"}):d.return(void 0);b=a.getVideoData();c={};return d.return(g.yua((c.cpn=b.clientPlaybackNonce,c.encryptedVideoId=b.videoId||"",c),1500))})},Vjb=function(a){var b=a.getVideoData();
if(b.xl)if(b.L("use_rta_for_player_hb"))a.attestationResponse=$jb(a);else if(b=new g.VK(b),g.SK.isInitialized()||a.sequenceNumber>=3){var c=Promise,d=c.resolve,e=null;if(b.videoData.Kr){var f=g.WK(b);if(f){e={};var h={};f=f.split("&");f=g.w(f);for(var l=f.next();!l.done;l=f.next())l=l.value.split("="),l.length===2&&(h[l[0]]=l[1]);h.r1a&&(e.webResponse=h.r1a);h.r1c&&(e.error=akb[Number(h.r1c)]);e.challenge=b.videoData.Kr}}a.attestationResponse=d.call(c,e||void 0)}},bkb=function(a){var b=a.getVideoData();
if(!g.zQ(a.getVideoData())||b.lV)return!1;if(b.useInnertubeDrmService()&&b.G){a=b.G.flavor==="playready"&&b.L("html5_innertube_heartbeats_for_playready");var c=b.G.flavor==="widevine"&&b.L("html5_innertube_heartbeats_for_widevine");b=g.UN(b.G)&&b.L("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},ckb=function(a){if(bkb(a))return!!a.heartbeatParams;
var b=a.getVideoData();return g.zQ(a.getVideoData())&&b.useInnertubeDrmService()&&!b.vl&&!b.qE?!1:!!b.heartbeatToken},D5=function(a,b){if(!a.B.isActive()&&a.N){var c=a.getVideoData();
if(ckb(a)||c.isLivePlayback){if(b===void 0)if(a.G)if(a.D)b=7500;else{var d;b=((d=a.heartbeatParams)==null?0:d.interval)?a.heartbeatParams.interval*1E3:a.getVideoData().u4||6E4}else b=1E3;a.B.start(b)}}},gkb=function(a,b,c){b.Pn&&(c=g.Oi(c,{internalipoverride:b.Pn}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.rb&&(d.kpt=b.rb);c=g.Oi(c,d);g.vr(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.B.isActive()&&E5(a)){a.K.reset();a.sequenceNumber++;e=e.responseText;var f=dkb(e);if(f){a.player.gb("onHeartbeat",f);var h=f.status==="ok"?f.stop_heartbeat?2:0:f.status==="stop"?1:f.status==="live_stream_offline"?0:-1}else h=(h=e.match(ekb))?h[1]==="0"?0:1:-1;fkb(a,void 0,f,e,h)}},
onError:function(e){E5(a)&&F5(a,!0,"net-"+e.status)},
onTimeout:function(){E5(a)&&F5(a,!0,"timeout")},
withCredentials:!0})},Ujb=function(a){var b,c;
g.J(function(d){b=a.player.U();c=a.getVideoData();if(!E5(a))return d.return();if(bkb(a))return hkb(a,b,c),d.Fa(0);Vjb(a);return g.F(d,ikb(a,b,c),0)})},hkb=function(a,b,c){var d;
if((d=a.heartbeatParams)!=null&&d.url){var e=g.Oi(a.heartbeatParams.url,{request_id:g.Gqa()});c.qa&&(e=g.Oi(e,{vvt:c.qa}),c.mdxEnvironment&&(e=g.Oi(e,{mdx_environment:c.mdxEnvironment})));g.iP(b,c.oauthToken).then(function(f){f&&(e=g.Oi(e,{access_token:f}));gkb(a,c,e)})}},E5=function(a){var b=a.getVideoData();
return a.player.getPresentingPlayerType()===3||g.Z(a.player.getPlayerStateObject(a.getPlayerType()),4)?!1:ckb(a)||b.isLivePlayback?!0:(G5(a),!1)},ikb=function(a,b,c){var d,e,f,h,l,m,n,p,q,r,t,u,y,B,C,G,H,N,M,X;
return g.J(function(W){if(W.j==1)return d="player/heartbeat",f={videoId:c.videoId,sequenceNumber:a.sequenceNumber,heartbeatServerData:(e=a.qa)!=null?e:c.heartbeatServerData},a.Y=a.attestationResponse,c.xl?g.F(W,a.Y,3):W.Fa(2);W.j!=2&&(f.attestationResponse=W.B);h=g.bR(c);m=(l=h.client)!=null?l:{};m.utcOffsetMinutes=a.utcOffsetMinutes;f.context=h;f.cpn=c.clientPlaybackNonce;if(n=typeof Intl!=="undefined"?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)m.timeZone=n;p={heartbeatChecks:[]};
if(q=c.getPlayerResponse())c.heartbeatToken&&(f.heartbeatToken=c.heartbeatToken),(r=q.playabilityStatus)&&(t=r.liveStreamability)&&t.liveStreamabilityRenderer&&p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.tC(b)&&(p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),u=jkb(a),y={},u!==null&&(y.clientPlayerPositionUtcMillis=u),C=(B=a.player.Ab())==null?void 0:g.gY(B),H=((G=C)==null?void 0:G.freePreviewWatchedDuration)||
0,H>0&&(y.freePreviewWatchedDuration={seconds:""+H}),p.unpluggedParams=y);f.heartbeatRequestParams=p;c.isLivePlayback?(N=jkb(a),N!==null&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition={utcTimeMillis:N})):b.L("enable_heartbeat_vod_playback_position")&&(M=kkb(a),M!==null&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition={streamTimeMillis:M}));a.player.publish("heartbeatRequest",f);X={timeout:3E4,onSuccess:function(fa){if(!a.B.isActive()&&E5(a)){var pa=
a.getVideoData(),ba=pa.xl&&a.Y==null,R;pa.xl=!((R=fa.heartbeatAttestationConfig)==null||!R.requiresAttestation)||ba;ba=fa.playabilityStatus;R=JSON.stringify(ba)||"{}";fa.authenticationMismatch&&a.player.ma("authshear",{});var V=-1;var v=fa.playabilityStatus;v&&(a.player.gb("onHeartbeat",v),v.status==="OK"?V=fa.stopHeartbeat?2:0:v.status==="UNPLAYABLE"?V=1:v.status==="LIVE_STREAM_OFFLINE"&&(V=0));a.sequenceNumber&&V===-1||a.K.reset();a.sequenceNumber++;fa.heartbeatServerData&&(a.qa=fa.heartbeatServerData);
pa.tE=fa;(v=fa.playerCueRangeSet)&&g.ZP(pa,v);fa.playerCueRanges&&fa.playerCueRanges.length>0&&(pa.cueRanges=fa.playerCueRanges);var U,cb;((U=fa.progressBarConfig)==null?0:U.progressBarStartPosition)&&((cb=fa.progressBarConfig)==null?0:cb.progressBarEndPosition)&&(pa.progressBarStartPosition=fa.progressBarConfig.progressBarStartPosition,pa.progressBarEndPosition=fa.progressBarConfig.progressBarEndPosition);pa.compositeLiveIngestionOffsetToken=fa.compositeLiveIngestionOffsetToken;fa.compositeLiveStatusToken!==
pa.compositeLiveStatusToken&&(pa.compositeLiveStatusToken=fa.compositeLiveStatusToken);pa.publish("dataupdated");fkb(a,fa,ba,R,V)}},
onError:function(fa){E5(a)&&F5(a,!0,"net-"+fa.status)},
onTimeout:function(){E5(a)&&F5(a,!0,"timeout")}};
g.iP(b,g.TQ(c)).then(function(fa){fa&&(X.yX="Bearer "+fa);g.av(a.oa,d,f,X)});
g.va(W)})},fkb=function(a,b,c,d,e){e===-1?(c="decode "+g.Te(d,3),F5(a,!1,c)):e===2?(G5(a),a.G=!0):(a.Z=0,a.B.stop(),e===1?(a.G=!1,c&&c.errorCode==="PLAYABILITY_ERROR_CODE_EMBARGOED"&&a.player.qp(!0),e="pe."+(c==null?void 0:c.errorCode)+";ps."+(c==null?void 0:c.status),a.player.Qf("heartbeat.stop",2,a.ag(d),e),g.gt("heartbeatActionPlayerHalted",lkb(c)),(b==null?0:b.videoTransitionEndpoint)&&c&&(b=b.videoTransitionEndpoint,(d=g.Q(b,g.kQ))&&mkb(a,d,c,{itct:b==null?void 0:b.clickTrackingParams}))):(a.G=
!0,d=0,a.D&&c&&(d=Xjb(a,b,c),a.player.publish("livestatedata",c)),d?D5(a,d):D5(a)))},Xjb=function(a,b,c){var d=c.liveStreamability&&c.liveStreamability.liveStreamabilityRenderer,e=!(!d||!(d.switchStreamsImmediately||d.transitionTiming&&d.transitionTiming==="STREAM_TRANSITION_TIMING_IMMEDIATELY"));
b=nkb(a,b,d);var f=a.getVideoData(),h=a.player.getPlayerStateObject(a.getPlayerType()),l=h.isPlaying()&&!g.GQ(f)&&!a.player.isAtLiveHead(a.getPlayerType());if(f.U().yc()){var m,n=((m=a.player.Be())==null?void 0:m.qc())||{};n.status=c.status||"";n.dvr=""+ +l;n["switch"]=""+ +e;n.ended=""+ +!(!d||!d.displayEndscreen);a.player.ma("heartbeat",n)}if(l&&!e)return b;e=d&&d.streamTransitionEndpoint&&g.Q(d.streamTransitionEndpoint,g.kQ);if((d&&d.transitionTiming)==="STREAM_TRANSITION_TIMING_AT_STREAM_END")a.getVideoData().transitionEndpointAtEndOfStream=
e;else if(e&&mkb(a,e,c))return b;if(c.status.toUpperCase()==="OK"){e=d&&d.broadcastId;m=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;l=e!==m&&e!=null;if(!g.DQ(f)||l){var p={video_id:f.videoId};f.pG&&(p.is_live_destination="1");a.player.L("web_player_heartbeat_request_watch_next")||(p.disable_watch_next=!0,p.raw_watch_next_response=f.getWatchNextResponse());p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;
p.force_gvi=f.On;p.pn=f.pn;f.K&&(p.vss_credentials_token=f.K,p.vss_credentials_token_type=f.In);f.qa&&(p.vvt=f.qa);d=void 0;g.DQ(f)?l&&(d=new C5("broadcastIdChanged",m+","+e),a.sL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",c)):(e&&(d=new C5("formatsReceived",""+e)),a.sL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",c));a.player.loadVideoByPlayerVars(p,void 0,void 0,void 0,d);return b}a.player.Gg("heartbeat",
a.getPlayerType())}d&&d.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.K=!0,a.Fb&&a.api.FC()):h.isBuffering()&&(f=((p=a.player.Be())==null?void 0:p.qc())||{},a.player.ma("hbse",f,!0),a.player.FC(),a.player.gb("onLiveMediaEnded",c)));return b},nkb=function(a,b,c){return a.player.L("web_player_use_heartbeat_poll_delay_ms")&&(a=Number(b==null?void 0:b.pollDelayMs))?a:(c=Number(c==null?void 0:c.pollDelayMs))?c:0},F5=function(a,b,c){var d=a.player.U();
if(!a.B.isActive()){a.B.stop();a.Z++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.jV||b&&!g.zQ(a.getVideoData())&&!ckb(a)&&f.isLivePlayback)f=!1;else{var h,l;((l=a.heartbeatParams)==null?0:l.retries)?h=a.heartbeatParams.retries:h=f.w4||5;f=a.Z>=h}f?(g.gt("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:lkb()),(b=a.getVideoData())&&b.isLivePlayback?a.player.Qf(e,1,"\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\uc774 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
c):a.player.Qf(e,1,"\ub3d9\uc601\uc0c1\uc5d0 \ub77c\uc774\uc120\uc2a4\ub97c \ubd80\uc5ec\ud558\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",c)):(d.L("html5_report_non_fatal_heartbeat_error")&&a.player.Ws(e,{msg:c}),D5(a,a.K.getValue()),g.di(a.K))}},lkb=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},G5=function(a){a.Z=0;
a.B.stop();a.G=!1;a.sequenceNumber=0},Wjb=function(a){var b=a.getVideoData(),c=a.player.U();
if(b.isLivePlayback)if(g.kO(c.G)){a.D=!0;a.N=!0;if(!g.vC(c)||g.tC(c))a.offlineSlate=new Sjb(a.player),g.P(a,a.offlineSlate),g.ER(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;((d=a.j)==null?void 0:d.status)!=="UNPLAYABLE"&&(a.j?(d=nkb(a,void 0,a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?D5(a,d):D5(a,7500):D5(a,1E3))}else a.player.Qf("html5.unsupportedlive",2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");
else g.Sb(b.Da,"heartbeat")&&a.player.Gg("heartbeat",a.getPlayerType())},mkb=function(a,b,c,d){var e=b&&b.videoId;
return e?(a.player.Gp(e,Object.assign({},{autonav:"1"},d||{}),void 0,!0,!0,b,g.TQ(a.getVideoData())),a.sL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",c),!0):!1},jkb=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(a*1E3):null},kkb=function(a){return(a=a.player.getCurrentTime(a.getPlayerType()))&&isFinite(a)?""+Math.floor(a*1E3):null},dkb=function(a){try{var b=JSON.parse(a);
return b!=null?b:void 0}catch(c){}},okb={ERAS:["BC",
"AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
okb={ERAS:["BC","AD"],ERANAMES:["\uae30\uc6d0\uc804","\uc11c\uae30"],NARROWMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONENARROWMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),MONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONEMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
SHORTMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONESHORTMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),WEEKDAYS:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),STANDALONEWEEKDAYS:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
SHORTWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),STANDALONESHORTWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),NARROWWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),STANDALONENARROWWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),SHORTQUARTERS:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"],QUARTERS:["\uc81c 1/4\ubd84\uae30","\uc81c 2/4\ubd84\uae30","\uc81c 3/4\ubd84\uae30","\uc81c 4/4\ubd84\uae30"],AMPMS:["\uc624\uc804",
"\uc624\ud6c4"],DATEFORMATS:["y\ub144 MMMM d\uc77c EEEE","y\ub144 MMMM d\uc77c","y. M. d.","yy. M. d."],TIMEFORMATS:["a h\uc2dc m\ubd84 s\ucd08 zzzz","a h\uc2dc m\ubd84 s\ucd08 z","a h:mm:ss","a h:mm"],DATETIMEFORMATS:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};var akb=["ATTESTATION_ERROR_UNKNOWN","ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"];
g.k=Jjb.prototype;g.k.BY=okb.FIRSTDAYOFWEEK;g.k.CY=okb.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new Jjb(this.date);a.BY=this.BY;a.CY=this.CY;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.years||a.months){var b=this.getMonth()+a.months+a.years*12,c=this.getYear()+Math.floor(b/12);b%=12;b<0&&(b+=12);a:{switch(b){case 1:var d=c%4!=0||c%100==0&&c%400!=0?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=c>=0&&c<=99?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+a.days*864E5),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),y5(this,a.getDate()))};
g.k.toString=function(){var a=this.getFullYear(),b=a<0?"-":a>=1E4?"+":"";return[b+Fjb(Math.abs(a),b?6:4),Fjb(this.getMonth()+1,2),Fjb(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var pkb=new g.wq("addUpcomingEventReminderEndpoint");var qkb=new g.wq("removeUpcomingEventReminderEndpoint");var rkb=new g.wq("updateUpcomingEventReminderButtonStateCommand");var Ljb=new g.wq("upcomingEventReminderButtonRenderer"),Rjb=new g.wq("upcomingEventReminderButtonStateRenderer");g.z(z5,g.fS);
z5.prototype.updateMenuItems=function(){var a=this,b=Kjb(this),c=0;c=0;for(var d={};c<b.length;d={RZ:void 0},c++){var e=this.C[c];e||(e=new g.T({I:"div",S:"ytp-reminder-menu-item",W:{role:"menuitem",tabindex:"0"},V:[{I:"div",S:"ytp-reminder-menu-item-icon",va:"{{icon}}"},{I:"div",S:"ytp-reminder-menu-item-label",va:"{{text}}"}]}),d.RZ=c,e.listen("click",function(h){return function(){var l=h.RZ;a.Mb();l=Kjb(a)[l];a.publish("reminderMenuItemClicked",l.serviceEndpoint||l.command)}}(d)),e.Ia(this.items),
this.C[c]=e);
var f=b[c];d=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":d=Gjb();break;case "NOTIFICATIONS_NONE":d=Hjb();break;case "NOTIFICATIONS_ACTIVE":d=g.wx()}f=f.text?g.ox(f.text):"";e.update({icon:d,text:f})}for(;c<this.C.length;)this.C.pop().dispose();c===0?this.Mb():this.md(this.j)};
z5.prototype.hide=function(){this.j&&this.j.removeAttribute("aria-haspopup");g.fS.prototype.hide.call(this)};
z5.prototype.show=function(){this.j&&this.j.setAttribute("aria-haspopup","true");g.fS.prototype.show.call(this)};
z5.prototype.xa=function(){g.qb(this.C);g.fS.prototype.xa.call(this)};g.z(A5,g.T);
A5.prototype.K=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.C(a.toggledServiceEndpoint):this.C(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;B5(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.Fb)this.j.Mb();else{var b=Ojb(this);b&&this.C(b.serviceEndpoint||b.command);b=((a=g.Q(b==null?void 0:b.command,g.oy))==null?void 0:a.commands)||[];a:{a=g.w(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=(b=g.Q(c.value,g.Iab))==
null?void 0:(d=b.popup)==null?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new z5(this.J,this.G),this.j.Ia(this.element),g.P(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.C,this));b=this.j;b.menuPopupRenderer=a;b.updateMenuItems()}};
A5.prototype.C=function(a){var b=g.Q(a,pkb),c=g.Q(a,qkb);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(Qjb(this,e,d.params),a=g.w(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.Q(b,rkb)){this.B=g.Q(b,rkb).state;B5(this);break}}};g.z(Sjb,g.T);g.k=Sjb.prototype;g.k.getPlayerType=function(){if(this.api.getPresentingPlayerType()===8)return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Sa=function(a){var b,c,d=a==null?void 0:(b=a.liveStreamability)==null?void 0:(c=b.liveStreamabilityRenderer)==null?void 0:c.offlineSlate;if(d){this.B=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.S3():Tjb(this,b);var e,f,h,l;if(c=a==null?void 0:(e=a.liveStreamability)==null?void 0:(f=e.liveStreamabilityRenderer)==null?void 0:(h=f.offlineSlate)==null?void 0:(l=h.liveStreamOfflineSlateRenderer)==null?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new A5(this.api),this.j.Ia(this.Ea("ytp-offline-slate-buttons")),g.P(this,this.j)),Mjb(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&Mjb(this.j,null,null);this.B=a}else this.B=null;this.X3()};
g.k.X3=function(a){if(this.api.getPresentingPlayerType()===8)var b=!0;else{var c=this.api.getPlayerStateObject(),d=this.getVideoData();b=d.isLivePlayback&&(c.isBuffering()||g.Z(c,2)||g.Z(c,64));var e=d.autonavState===2&&g.Z(c,2);c=c.isPlaying()&&!g.GQ(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.B?this.Fb?(a==null?0:g.my(a,2))&&!this.getVideoData().Fm&&(g.fp(this.element,"ytp-offline-slate-collapsed"),this.D.stop(),g.fp(this.C,"ytp-offline-slate-bar-fade"),this.G.start()):(this.show(),
this.D.start(),this.api.publish("offlineslatestatechange"),this.K&&this.api.FC()):this.Fb&&(this.hide(),this.api.publish("offlineslatestatechange"))};
g.k.S3=function(){var a,b,c,d,e=(a=this.B)==null?void 0:(b=a.liveStreamability)==null?void 0:(c=b.liveStreamabilityRenderer)==null?void 0:(d=c.offlineSlate)==null?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Ya()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(Tjb(this,e),this.countdownTimer.stop()):(Tjb(this,e,g.vy(b-a)),g.Xo(this.countdownTimer)))};
g.k.xa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.T.prototype.xa.call(this)};C5.prototype.B=function(a){return this.trigger&&a.trigger?this.module===a.module&&this.trigger===a.trigger&&this.j===a.j:!1};
C5.prototype.isExpired=function(){return(0,g.S)()-this.C>6E4};
C5.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.j};g.z(Zjb,g.UX);g.k=Zjb.prototype;g.k.xa=function(){G5(this);this.player.rf("heartbeat");g.UX.prototype.xa.call(this)};
g.k.onCueRangeEnter=function(){this.N=!0;D5(this,2E3)};
g.k.UG=function(a){this.heartbeatParams=a;D5(this,2E3)};
g.k.r5=function(a){var b;this.player.getPresentingPlayerType()!==8&&((b=this.j)==null?void 0:b.status)!=="UNPLAYABLE"&&(g.Z(a.state,2)||g.Z(a.state,64)?(G5(this),this.D&&(this.N=!0,D5(this,1E3))):(g.Z(a.state,1)||g.Z(a.state,8))&&D5(this,2E3))};
g.k.s5=function(){this.player.getPresentingPlayerType()!==3&&D5(this,2E3)};
g.k.getPlayerType=function(){if(this.player.getPresentingPlayerType()===8)return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.En=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.sL=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.gt("heartbeatActionPlayerTransitioned",a)};
g.k.ag=function(a){var b="LICENSE",c=dkb(a);if(c)return c.reason||g.pY[b]||"";(a=a.match(ekb))&&(a=Number(a[1]))&&(b=g.Jwa(a));return g.pY[b]||""};
g.k.hG=function(){return!!this.offlineSlate&&this.offlineSlate.Fb};
var ekb=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.TX("heartbeat",Zjb);})(_yt_player);
