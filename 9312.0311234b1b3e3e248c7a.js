(self.webpackChunkudonarium_lily_gk=self.webpackChunkudonarium_lily_gk||[]).push([[9312],{9312:function(re,ue,F){F(4656),function(s){function z(t,$){return"number"==typeof t&&"number"==typeof $?t<=$:t["$<="]($)}function k(t,$){return"number"==typeof t&&"number"==typeof $?t/$:t["$/"]($)}function x(t,$){return"number"==typeof t&&"number"==typeof $?t-$:t["$-"]($)}function E(t,$){return"number"==typeof t&&"number"==typeof $?t<$:t["$<"]($)}function P(t,$){return"number"==typeof t&&"number"==typeof $?t*$:t["$*"]($)}function l(t,$){return"number"==typeof t&&"number"==typeof $?t+$:t["$+"]($)}function S(t,$){return"number"==typeof t&&"number"==typeof $?t>=$:t["$>="]($)}var $,ee,ie,v,M,K,N,V,Y,j,q,R,c,B,I,D=[],e=s.nil,Q=s.$$$,p=s.$$,G=s.module,U=s.klass,X=s.send2,m=s.truthy,L=s.send;$=D,ee=I=[G(D[0],"BCDice")].concat($),ie=B=[G(I[0],"GameSystem")].concat(ee),R=U(B[0],p(B,"Base"),"Warhammer"),c=[R].concat(ie),R.$$prototype.randomizer=e,s.const_set(c[0],"ID","Warhammer"),s.const_set(c[0],"NAME","\u30a6\u30a9\u30fc\u30cf\u30f3\u30de\u30fc"),s.const_set(c[0],"SORT_KEY","\u3046\u304a\u304a\u306f\u3093\u307e\u3042"),s.const_set(c[0],"HELP_MESSAGE",'\u30fb\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u8868(whHxx/whAxx/whBxx/whLxx)\n\u3000"WH\u90e8\u4f4d \u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024"\u306e\u5f62\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u90e8\u4f4d\u306f\u300cH(\u982d\u90e8)\u300d\u300cA(\u8155)\u300d\u300cB(\u80f4\u4f53)\u300d\u300cL(\u8db3)\u300d\u306e\uff14\u30ab\u6240\u3067\u3059\u3002\n\u3000\u4f8b\uff09whH10 whA5 WHL4\n\u30fb\u547d\u4e2d\u5224\u5b9a(WHx@t)\n\u3000"WH(\u547d\u4e2d\u5024)@(\u7a2e\u5225)"\u306e\u5f62\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u3000\u7a2e\u5225\u306f\u811a\u306e\u6570\u3092\u6570\u5b57\u3001\u7ffc\u304c\u4ed8\u3044\u3066\u3044\u308b\u3082\u306e\u306f\u300cW\u300d\u3001\u624b\u304c\u4ed8\u3044\u3066\u3044\u308b\u3082\u306e\u306f\u300cH\u300d\u3067\u66f8\u304d\u307e\u3059\u3002\n\u3000\u300c2H(\u4e8c\u8db3)\u300d\u300c2W(\u6709\u7ffc\u4e8c\u8db3)\u300d\u300c4(\u56db\u8db3)\u300d\u300c4H(\u534a\u4eba\u56db\u8db3)\u300d\u300c4W(\u6709\u7ffc\u56db\u8db3)\u300d\u300cW(\u9ce5\u985e)\u300d\u3068\u306a\u308a\u307e\u3059\u3002\n\u3000\u547d\u4e2d\u5224\u5b9a\u3092\u884c\u3063\u3066\u3001\u5f53\u305f\u308c\u3070\u90e8\u4f4d\u3082\u8868\u793a\u3057\u307e\u3059\u3002\n\u3000\u306a\u304a\u3001\u7a2e\u5225\u6307\u5b9a\u3092\u7701\u7565\u3059\u308b\u3068\u300c\u4e8c\u8db3\u300d\u3001\u300c@\u300d\u3060\u3051\u306b\u3059\u308b\u3068\u5168\u7a2e\u5225\u306e\u547d\u4e2d\u90e8\u4f4d\u3092\u8868\u793a\u3057\u307e\u3059\u3002(\u30b3\u30de\u30f3\u30c9\u3092\u5fd8\u308c\u305f\u6642\u306e\u5bfe\u5fdc\u3067\u3059)\n\u3000\u4f8b\uff09wh60\u3000\u3000wh43@4W\u3000\u3000WH65@\n'),R.$register_prefix("WH"),s.def(R,"$initialize",v=function(u){var r=this;return v.$$p&&(v.$$p=null),X(r,s.find_super_dispatcher(r,"initialize",v,!1,!0),"initialize",[u],null),r.round_type=Q(p(c,"RoundType"),"CEIL")},v.$$arity=1),s.def(R,"$eval_game_system_specific_command",M=function(u){var r,n=e,i=e,_=e;return n=e,r=u.$upcase(),/^(WH\d+(@[\dWH]*)?)/i["$==="](r)?(i=p(c,"Regexp").$last_match(1),n=this.$getAttackResult(i)):/^(WH[HABTLW]\d+)/i["$==="](r)&&(_=p(c,"Regexp").$last_match(1),n=this.$getCriticalResult(_)),n},M.$$arity=1),s.def(R,"$result_1d100",K=function(u,a,n,r){return r["$=="]("?")?p(c,"Result").$nothing():n["$=="]("<=")?m(z(u,r))?p(c,"Result").$success("\u6210\u529f(\u6210\u529f\u5ea6"+k(x(r,u),10).$to_i()+")"):p(c,"Result").$failure("\u5931\u6557(\u5931\u6557\u5ea6"+k(x(u,r),10).$to_i()+")"):e},K.$$arity=4),s.def(R,"$result_1d100_text",N=function(u,a,n,r){var i,f=e;return f=(i=this.$result_1d100(u,a,n,r))===e||null==i?e:L(i,"text",[]),m(f["$nil?"]())?"":" \uff1e "+f},N.$$arity=4),s.def(R,"$getCriticalResult",V=function(u){var n,r,i,_,f,t,b=e,H=e,y=e,g=e,o=e,d=e,w=e,C=e,T=e,W=e;return n=["01:\u6253\u6483\u3067\u72b6\u6cc1\u304c\u628a\u63e1\u51fa\u6765\u306a\u304f\u306a\u308b\u3002\u6b21\u30bf\u30fc\u30f3\u306f1\u56de\u306e\u534a\u30a2\u30af\u30b7\u30e7\u30f3\u3057\u304b\u884c\u306a\u3048\u306a\u3044\u3002","02:\u8033\u3092\u5f37\u6253\u3055\u308c\u305f\u70ba\u3001\u8033\u9cf4\u308a\u304c\u9177\u304f\u76ee\u7729\u304c\u3059\u308b\u30021R\u306b\u6e21\u3063\u3066\u4e00\u5207\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u306a\u3048\u306a\u3044\u3002","03:\u6253\u6483\u304c\u982d\u76ae\u3092\u9177\u304f\u50b7\u3064\u3051\u305f\u3002\u3010\u6b66\u5668\u6280\u8853\u5ea6\u3011\u306b-10%\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u7d99\u7d9a\u3002","04:\u93a7\u304c\u640d\u50b7\u3057\u5f53\u8a72\u90e8\u4f4d\u306eAP-1\u3002\u4fee\u7406\u3059\u308b\u306b\u306f(\u8077\u80fd:\u93a7\u935b\u51b6)\u30c6\u30b9\u30c8\u3002\u93a7\u3092\u7740\u3051\u3066\u3044\u306a\u3044\u306a\u30891R\u306e\u9593\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u306a\u3048\u306a\u3044\u3002","05:\u8ee2\u3093\u3067\u5012\u308c\u3001\u982d\u304c\u304f\u3089\u304f\u3089\u3059\u308b\u30021R\u306b\u6e21\u3063\u3066\u3042\u3089\u3086\u308b\u30c6\u30b9\u30c8\u306b-30\u3067\u3001\u7acb\u3061\u4e0a\u304c\u308b\u306b\u306f\u8d77\u7acb\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3002","06:1d10R\u6c17\u7d76\u3002","07:1d10\u5206\u6c17\u7d76\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3002","08:\u9854\u304c\u305a\u305f\u305a\u305f\u306b\u306a\u3063\u3066\u5012\u308c\u3001\u4ee5\u5f8c\u7121\u9632\u5099\u72b6\u614b\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5f37\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u7247\u65b9\u306e\u8996\u529b\u3092\u5931\u3046\u3002","09:\u51c4\u307e\u3058\u3044\u6253\u6483\u306b\u3088\u308a\u982d\u84cb\u9aa8\u304c\u7c89\u7815\u3055\u308c\u308b\u3002\u6b7b\u306f\u77ac\u6642\u306b\u8a2a\u308c\u308b\u3002","10:\u6b7b\u4ea1\u3059\u308b\u3002\u3044\u304b\u306b\u76db\u5927\u306b\u51fa\u8840\u3057\u3001\u3069\u306e\u3088\u3046\u306a\u6b7b\u306b\u69d8\u3092\u898b\u305b\u305f\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3082\u3088\u3044\u3002"],r=["01:\u624b\u306b\u63e1\u3063\u3066\u3044\u305f\u3082\u306e\u3092\u843d\u3068\u3059\u3002\u76fe\u306f\u304f\u304f\u308a\u3064\u3051\u3089\u308c\u3066\u3044\u308b\u70ba\u3001\u5f71\u97ff\u306a\u3057\u3002","02:\u6253\u6483\u3067\u8155\u304c\u75fa\u308c\u30011R\u306e\u9593\u4f7f\u3048\u306a\u304f\u306a\u308b\u3002","03:\u624b\u306e\u6a5f\u80fd\u304c\u5931\u308f\u308c\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u56de\u5fa9\u3067\u304d\u306a\u3044\u3002\u624b\u3067\u63e1\u3063\u3066\u3044\u305f\u3082\u306e(\u76fe\u3092\u9664\u304f)\u306f\u843d\u3061\u308b\u3002","04:\u93a7\u304c\u640d\u50b7\u3059\u308b\u3002\u5f53\u8a72\u90e8\u4f4d\u306eAP-1\u3002\u4fee\u7406\u3059\u308b\u306b\u306f(\u8077\u80fd:\u93a7\u935b\u51b6)\u30c6\u30b9\u30c8\u3002\u93a7\u3092\u7740\u3051\u3066\u3044\u306a\u3044\u306a\u3089\u8155\u304c\u75fa\u308c\u30011R\u306e\u9593\u4f7f\u3048\u306a\u304f\u306a\u308b\u3002","05:\u8155\u306e\u6a5f\u80fd\u304c\u5931\u308f\u308c\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u56de\u5fa9\u3067\u304d\u306a\u3044\u3002\u624b\u3067\u63e1\u3063\u3066\u3044\u305f\u3082\u306e(\u76fe\u3092\u9664\u304f)\u306f\u843d\u3061\u308b\u3002","06:\u8155\u304c\u7815\u304b\u308c\u308b\u3002\u624b\u3067\u63e1\u3063\u3066\u3044\u305f\u3082\u306e(\u76fe\u3092\u9664\u304f)\u306f\u843d\u3061\u308b\u3002\u51fa\u8840\u304c\u3072\u3069\u304f\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002","07:\u624b\u9996\u304b\u3089\u5148\u304c\u8840\u307e\u307f\u308c\u306e\u6b8b\u9ab8\u3068\u5316\u3059\u3002\u624b\u3067\u63e1\u3063\u3066\u3044\u305f\u3082\u306e(\u76fe\u3092\u9664\u304f)\u306f\u843d\u3061\u308b\u3002\u51fa\u8840\u304c\u3072\u3069\u304f\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5065\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u624b\u306e\u6a5f\u80fd\u3092\u5931\u3046\u3002","08:\u8155\u306f\u8840\u307e\u307f\u308c\u306e\u8089\u584a\u304c\u3076\u3089\u4e0b\u304c\u3063\u3066\u3044\u308b\u72b6\u614b\u306b\u306a\u308b\u3002\u624b\u3067\u63e1\u3063\u3066\u3044\u305f\u3082\u306e(\u76fe\u3092\u9664\u304f)\u306f\u843d\u3061\u308b\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5065\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u8098\u304b\u3089\u5148\u306e\u6a5f\u80fd\u3092\u5931\u3046\u3002","09:\u5927\u52d5\u8108\u306b\u50b7\u304c\u53ca\u3093\u3060\u3002\u30b3\u30f3\u30de\u6570\u79d2\u306e\u5185\u306b\u640d\u50b7\u3057\u305f\u80a9\u304b\u3089\u8840\u3092\u5674\u51fa\u3057\u3066\u5012\u308c\u308b\u3002\u30b7\u30e7\u30c3\u30af\u3068\u5931\u8840\u306b\u3088\u308a\u3001\u307b\u307c\u5373\u6b7b\u3059\u308b\u3002","10:\u6b7b\u4ea1\u3059\u308b\u3002\u3044\u304b\u306b\u76db\u5927\u306b\u51fa\u8840\u3057\u3001\u3069\u306e\u3088\u3046\u306a\u6b7b\u306b\u69d8\u3092\u898b\u305b\u305f\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3082\u3088\u3044\u3002"],i=["01:\u6253\u6483\u3067\u606f\u304c\u8a70\u307e\u308b\u30021R\u306e\u9593\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u5168\u3066\u306e\u30c6\u30b9\u30c8\u3084\u653b\u6483\u306b-20%\u3002","02:\u80a1\u9593\u3078\u306e\u4e00\u6483\u3002\u82e6\u75db\u306e\u3042\u307e\u308a\u30011R\u306b\u6e21\u3063\u3066\u4e00\u5207\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u306a\u3048\u306a\u3044\u3002","03:\u6253\u6483\u3067\u808b\u9aa8\u304c\u3050\u3061\u3083\u3050\u3061\u3083\u306b\u306a\u308b\u3002\u4ee5\u5f8c\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u306e\u9593\u3001\u3010\u6b66\u5668\u6280\u8853\u5ea6\u3011\u306b-10%\u3002","04:\u93a7\u304c\u640d\u50b7\u3059\u308b\u3002\u5f53\u8a72\u90e8\u4f4d\u306eAP-1\u3002\u4fee\u7406\u3059\u308b\u306b\u306f(\u8077\u80fd:\u93a7\u935b\u51b6)\u30c6\u30b9\u30c8\u3002\u93a7\u3092\u7740\u3051\u3066\u3044\u306a\u3044\u306a\u3089\u80a1\u9593\u3078\u306e\u4e00\u6483\u30011R\u306b\u6e21\u3063\u3066\u4e00\u5207\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u884c\u306a\u3048\u306a\u3044\u3002","05:\u8ee2\u3093\u3067\u5012\u308c\u3001\u606f\u304c\u8a70\u307e\u3063\u3066\u60b6\u7d76\u3059\u308b\u30021R\u306b\u6e21\u3063\u3066\u3042\u3089\u3086\u308b\u30c6\u30b9\u30c8\u306b-30\u306e\u4fee\u6b63\u3001\u7acb\u3061\u4e0a\u304c\u308b\u306b\u306f\u8d77\u7acb\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3002","06:1d10R\u6c17\u7d76\u3002","07:\u3072\u3069\u3044\u5185\u51fa\u8840\u304c\u8d77\u3053\u308a\u3001\u7121\u9632\u5099\u72b6\u614b\u3002\u51fa\u8840\u304c\u3072\u3069\u304f\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002","08:\u810a\u9ac4\u304c\u7c89\u7815\u3055\u308c\u3066\u5012\u308c\u3001\u4ee5\u5f8c\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u7121\u9632\u5099\u72b6\u614b\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5f37\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u8170\u304b\u3089\u4e0b\u304c\u4e0d\u968f\u306b\u306a\u308b\u3002","09:\u51c4\u307e\u3058\u3044\u6253\u6483\u306b\u3088\u308a\u8907\u6570\u306e\u81d3\u5668\u304c\u7834\u88c2\u3057\u3001\u6b7b\u306f\u6570\u79d2\u306e\u3046\u3061\u306b\u8a2a\u308c\u308b\u3002","10:\u6b7b\u4ea1\u3059\u308b\u3002\u3044\u304b\u306b\u76db\u5927\u306b\u51fa\u8840\u3057\u3001\u3069\u306e\u3088\u3046\u306a\u6b7b\u306b\u69d8\u3092\u898b\u305b\u305f\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3082\u3088\u3044\u3002"],_=["01:\u3088\u308d\u3081\u304f\u3002\u6b21\u306e\u30bf\u30fc\u30f3\u30011\u56de\u306e\u534a\u30a2\u30af\u30b7\u30e7\u30f3\u3057\u304b\u884c\u306a\u3048\u306a\u3044\u3002","02:\u811a\u304c\u75fa\u308c\u308b\u30021R\u306b\u6e21\u3063\u3066\u3010\u79fb\u52d5\u3011\u306f\u534a\u6e1b\u3057\u3001\u811a\u306b\u95a2\u9023\u3059\u308b\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u306b-20%\u3002\u56de\u907f\u304c\u51fa\u6765\u306a\u304f\u306a\u308b\u3002","03:\u811a\u306e\u6a5f\u80fd\u304c\u5931\u308f\u308c\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u56de\u5fa9\u3057\u306a\u3044\u3002\u3010\u79fb\u52d5\u3011\u306f\u534a\u6e1b\u3057\u3001\u811a\u306b\u95a2\u9023\u3059\u308b\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u306b-20%\u3002\u56de\u907f\u304c\u51fa\u6765\u306a\u304f\u306a\u308b\u3002","04:\u93a7\u304c\u640d\u50b7\u3059\u308b\u3002\u5f53\u8a72\u90e8\u4f4d\u306eAP-1\u3002\u4fee\u7406\u3059\u308b\u306b\u306f(\u8077\u80fd:\u93a7\u935b\u51b6)\u30c6\u30b9\u30c8\u3002\u93a7\u3092\u7740\u3051\u3066\u3044\u306a\u3044\u306a\u3089\u811a\u304c\u75fa\u308c\u308b\u30011R\u306b\u6e21\u3063\u3066\u3010\u79fb\u52d5\u3011\u306f\u534a\u6e1b\u3057\u3001\u811a\u306b\u95a2\u9023\u3059\u308b\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u306b-20%\u3001\u56de\u907f\u4e0d\u53ef\u306b\u306a\u308b\u3002","05:\u8ee2\u3093\u3067\u5012\u308c\u3001\u982d\u304c\u304f\u3089\u304f\u3089\u3059\u308b\u30021R\u306b\u6e21\u3063\u3066\u3042\u3089\u3086\u308b\u30c6\u30b9\u30c8\u306b-30\u306e\u4fee\u6b63\u3001\u7acb\u3061\u4e0a\u304c\u308b\u306b\u306f\u8d77\u7acb\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3002","06:\u811a\u304c\u7815\u304b\u308c\u3001\u7121\u9632\u5099\u72b6\u614b\u3002\u51fa\u8840\u304c\u3072\u3069\u304f\u3001\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002","07:\u811a\u306f\u8840\u307e\u307f\u308c\u306e\u6b8b\u9ab8\u3068\u5316\u3057\u3001\u7121\u9632\u5099\u72b6\u614b\u306b\u306a\u308b\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5f37\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u8db3\u9996\u304b\u3089\u5148\u3092\u5931\u3046\u3002","08:\u811a\u306f\u8840\u307e\u307f\u308c\u306e\u8089\u584a\u304c\u3076\u3089\u3055\u304c\u3063\u3066\u3044\u308b\u72b6\u614b\u3002\u4ee5\u5f8c\u7121\u9632\u5099\u72b6\u614b\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u306e\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20%\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5f37\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u819d\u304b\u3089\u4e0b\u3092\u5931\u3046\u3002","09:\u5927\u52d5\u8108\u306b\u50b7\u304c\u53ca\u3076\u3002\u30b3\u30f3\u30de\u6570\u79d2\u306e\u5185\u306b\u811a\u306e\u6b8b\u9ab8\u304b\u3089\u8840\u3092\u5674\u51fa\u3057\u3066\u5012\u308c\u3001\u30b7\u30e7\u30c3\u30af\u3068\u51fa\u8840\u3067\u6b7b\u306f\u77ac\u6642\u306b\u8a2a\u308c\u308b\u3002","10:\u6b7b\u4ea1\u3059\u308b\u3002\u3044\u304b\u306b\u76db\u5927\u306b\u51fa\u8840\u3057\u3001\u3069\u306e\u3088\u3046\u306a\u6b7b\u306b\u69d8\u3092\u898b\u305b\u305f\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3082\u3088\u3044\u3002"],f=["01:\u8efd\u6253\u30021\u30e9\u30a6\u30f3\u30c9\u306b\u6e21\u3063\u3066\u3001\u3042\u3089\u3086\u308b\u30c6\u30b9\u30c8\u306b-10\uff05\u3002","02:\u304b\u3059\u308a\u50b7\u3002+10\uff05\u306e\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u3092\u884c\u3044\u3001\u5931\u6557\u306a\u3089\u76f4\u3061\u306b\u9ad8\u5ea6\u30921\u6bb5\u968e\u5931\u3046\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u6b21\u306e\u30bf\u30fc\u30f3\u306b\u306f\u98db\u3073\u7acb\u3066\u306a\u3044\u3002","03:\u640d\u50b7\u3059\u308b\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c2\u70b9\u4f4e\u4e0b\u3059\u308b\u3002-10\uff05\u306e\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u3092\u884c\u3044\u3001\u5931\u6557\u306a\u3089\u76f4\u3061\u306b\u9ad8\u5ea6\u30921\u6bb5\u968e\u5931\u3046\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u6b21\u306e\u30bf\u30fc\u30f3\u306b\u306f\u98db\u3073\u7acb\u3066\u306a\u3044\u3002","04:\u9177\u304f\u640d\u50b7\u3059\u308b\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c4\u70b9\u4f4e\u4e0b\u3059\u308b\u3002-30\uff05\u306e\u3010\u654f\u6377\u3011\u30c6\u30b9\u30c8\u3092\u884c\u3044\u3001\u5931\u6557\u306a\u3089\u76f4\u3061\u306b\u9ad8\u5ea6\u30921\u6bb5\u968e\u5931\u3046\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u30011d10\u30bf\u30fc\u30f3\u304c\u7d4c\u904e\u3059\u308b\u307e\u3067\u98db\u3073\u7acb\u3066\u306a\u3044\u3002","05:\u7ffc\u304c\u4f7f\u3048\u306a\u304f\u306a\u308b\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c0\u306b\u4f4e\u4e0b\u3059\u308b\u3002\u98db\u884c\u4e2d\u306e\u3082\u306e\u306f\u843d\u4e0b\u3057\u3001\u9ad8\u5ea6\u306b\u5fdc\u3058\u305f\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u602a\u6211\u304c\u7652\u3048\u308b\u307e\u3067\u98db\u3073\u7acb\u3066\u306a\u3044\u3002","06:\u7ffc\u306e\u4ed8\u3051\u6839\u306b\u50b7\u304c\u958b\u304f\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c0\u306b\u4f4e\u4e0b\u3059\u308b\u3002\u98db\u884c\u4e2d\u306e\u3082\u306e\u306f\u843d\u4e0b\u3057\u3001\u9ad8\u5ea6\u306b\u5fdc\u3058\u305f\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u602a\u6211\u304c\u7652\u3048\u308b\u307e\u3067\u98db\u3073\u7acb\u3066\u306a\u3044\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20\uff05\u306e\u78ba\u7387\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002","07:\u7ffc\u306f\u8840\u307e\u307f\u308c\u306e\u6b8b\u9ab8\u3068\u5316\u3057\u3001\u7121\u9632\u5099\u72b6\u614b\u306b\u306a\u308b\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c0\u306b\u4f4e\u4e0b\u3059\u308b\u3002\u98db\u884c\u4e2d\u306e\u3082\u306e\u306f\u843d\u4e0b\u3057\u3001\u9ad8\u5ea6\u306b\u5fdc\u3058\u305f\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u602a\u6211\u304c\u7652\u3048\u308b\u307e\u3067\u98db\u3073\u7acb\u3066\u306a\u3044\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20\uff05\u306e\u78ba\u7387\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u3010\u9811\u5f37\u3011\u30c6\u30b9\u30c8\u306b\u5931\u6557\u3059\u308b\u3068\u98db\u884c\u80fd\u529b\u3092\u5931\u3046\u3002","08:\u7ffc\u304c\u5343\u5207\u308c\u3066\u30d0\u30e9\u30d0\u30e9\u306b\u306a\u308a\u3001\u7121\u9632\u5099\u72b6\u614b\u306b\u306a\u308b\u3002\u3010\u98db\u884c\u79fb\u52d5\u529b\u3011\u304c0\u306b\u4f4e\u4e0b\u3059\u308b\u3002\u98db\u884c\u4e2d\u306e\u3082\u306e\u306f\u843d\u4e0b\u3057\u3001\u9ad8\u5ea6\u306b\u5fdc\u3058\u305f\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002\u5730\u4e0a\u306b\u3044\u308b\u30af\u30ea\u30fc\u30c1\u30e3\u30fc\u306f\u3001\u602a\u6211\u304c\u7652\u3048\u308b\u307e\u3067\u98db\u3073\u7acb\u3066\u306a\u3044\u3002\u6cbb\u7642\u3092\u53d7\u3051\u308b\u307e\u3067\u6bceR\u88ab\u5bb3\u8005\u306e\u30bf\u30fc\u30f3\u958b\u59cb\u6642\u306b20\uff05\u306e\u78ba\u7387\u3067\u6b7b\u4ea1\u3002\u4ee5\u5f8cCT\u306f\u30b5\u30c9\u30f3\u30c7\u30b9\u3092\u9069\u7528\u3002\u98db\u884c\u80fd\u529b\u3092\u5931\u3046\u3002","09:\u5927\u52d5\u8108\u304c\u5207\u65ad\u3055\u308c\u305f\u3002\u30b3\u30f3\u30de\u6570\u79d2\u306e\u5185\u306b\u8840\u3092\u5674\u304d\u4e0a\u3052\u3066\u304f\u305a\u304a\u308c\u308b\u3001\u30b7\u30e7\u30c3\u30af\u3068\u51fa\u8840\u3067\u6b7b\u306f\u77ac\u6642\u306b\u8a2a\u308c\u308b\u3002","10:\u6b7b\u4ea1\u3059\u308b\u3002\u3044\u304b\u306b\u76db\u5927\u306b\u51fa\u8840\u3057\u3001\u3069\u306e\u3088\u3046\u306a\u6b7b\u306b\u69d8\u3092\u898b\u305b\u305f\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3082\u3088\u3044\u3002"],b=[5,7,9,10,10,10,10,10,10,10,5,6,8,9,10,10,10,10,10,10,4,6,8,9,9,10,10,10,10,10,4,5,7,8,9,9,10,10,10,10,3,5,7,8,8,9,9,10,10,10,3,4,6,7,8,8,9,9,10,10,2,4,6,7,7,8,8,9,9,10,2,3,5,6,7,7,8,8,9,9,1,3,5,6,6,7,7,8,8,9,1,2,4,5,6,6,7,7,8,8],m(/WH([HABTLW])(\d+)/["$=~"](u))?(H=p(c,"Regexp").$last_match(1),y=p(c,"Regexp").$last_match(2).$to_i(),m("number"==typeof(t=y)?t>10:t["$>"](10))&&(y=10),m(E(y,1))&&(y=1),g="",o="",/H/i["$==="](d=H)?(g="\u982d\u90e8",o=n):/A/i["$==="](d)?(g="\u8155\u90e8",o=r):/[TB]/i["$==="](d)?(g="\u80f4\u4f53",o=i):/L/i["$==="](d)?(g="\u811a\u90e8",o=_):/W/i["$==="](d)&&(g="\u7ffc\u90e8",o=f),C=P(k(x(w=this.randomizer.$roll_once(100),1),10).$to_i(),10),T=b["$[]"](x(l(C,y),1)),W=o["$[]"](x(T,1)),g+"CT\u8868("+w+"+"+y+") \uff1e "+(W=m(S(T,5))?l(W,"\u30b5\u30c9\u30f3\u30c7\u30b9\xd7"):l(W,"\u30b5\u30c9\u30f3\u30c7\u30b9\u25cb"))):"1"},V.$$arity=1),s.def(R,"$wh_atpos",Y=function(u,a){var n,r=this,g=e,o=e,d=e,w=e,C=e;return r.$debug("wh_atpos begin pos_type",a),g=[["\u4e8c\u8db3",15,"\u982d\u90e8",35,"\u53f3\u8155",55,"\u5de6\u8155",80,"\u80f4\u4f53",90,"\u53f3\u811a",100,"\u5de6\u811a"],["\u6709\u7ffc\u4e8c\u8db3",15,"\u982d\u90e8",25,"\u53f3\u8155",35,"\u5de6\u8155",45,"\u53f3\u7ffc",55,"\u5de6\u7ffc",80,"\u80f4\u4f53",90,"\u53f3\u811a",100,"\u5de6\u811a"],["\u56db\u8db3",15,"\u982d\u90e8",60,"\u80f4\u4f53",70,"\u53f3\u524d\u811a",80,"\u5de6\u524d\u811a",90,"\u53f3\u5f8c\u811a",100,"\u5de6\u5f8c\u811a"],["\u534a\u4eba\u56db\u8db3",10,"\u982d\u90e8",20,"\u53f3\u8155",30,"\u5de6\u8155",60,"\u80f4\u4f53",70,"\u53f3\u524d\u811a",80,"\u5de6\u524d\u811a",90,"\u53f3\u5f8c\u811a",100,"\u5de6\u5f8c\u811a"],["\u6709\u7ffc\u56db\u8db3",10,"\u982d\u90e8",20,"\u53f3\u7ffc",30,"\u5de6\u7ffc",60,"\u80f4\u4f53",70,"\u53f3\u524d\u811a",80,"\u5de6\u524d\u811a",90,"\u53f3\u5f8c\u811a",100,"\u5de6\u5f8c\u811a"],["\u9ce5",15,"\u982d\u90e8",35,"\u53f3\u7ffc",55,"\u5de6\u7ffc",80,"\u80f4\u4f53",90,"\u53f3\u811a",100,"\u5de6\u811a"]],o=0,r.$debug("pos_type",a),m(a["$!="](""))&&(/@(2W|W2)/i["$==="](d=a)?o=1:/@(4W|W4)/i["$==="](d)?o=4:/@(4H|H4)/i["$==="](d)?o=3:/@4/i["$==="](d)?o=2:/@W/i["$==="](d)?o=5:m(/@(2H|H2|2)/i["$=~"](a))||(o=-1)),w="",r.$debug("pos_t",o),m(E(o,0))?L(g,"each",[],((n=function(W){return null==W&&(W=e),w=l(w,(null==n.$$s?this:n.$$s).$get_wh_atpos_message(W,u))}).$$s=r,n.$$arity=1,n)):(C=g["$[]"](o),w=l(w,r.$get_wh_atpos_message(C,u))),w},Y.$$arity=2),s.def(R,"$get_wh_atpos_message",j=function(u,a){var n,r=this,i=e;return i=l(i="",l(l(" ",u["$[]"](0)),":")),function(){var _=s.new_brk();try{L(1,"step",[l(u.$length(),1),2],((n=function(b){if(null==b&&(b=e),!m(z(a,u["$[]"](b))))return e;i=l(i,u["$[]"](l(b,1))),s.brk(e,_)}).$$s=r,n.$$brk=_,n.$$arity=1,n))}catch(f){if(f===_)return f.$v;throw f}}(),i},j.$$arity=2),s.def(R,"$getAttackResult",q=function(u){var a=this,n=e,r=e,i=e,_=e,f=e;return a.$debug("getAttackResult begin string",u),n="",m(/(.+)(@.*)/["$=~"](u))&&(u=p(c,"Regexp").$last_match(1),n=p(c,"Regexp").$last_match(2),a.$debug("pos_type",n)),m(/WH(\d+)/i["$=~"](u))?(r=p(c,"Regexp").$last_match(1).$to_i(),_=l(_="("+u+") \uff1e "+(i=a.randomizer.$roll_once(100)),a.$result_1d100_text(i,i,"<=",r)),f=l(P(i["$%"](10),10),k(i,10).$to_i()),m(S(i,100))&&(f=100),m(z(i,r))&&(_=l(_,a.$wh_atpos(f,n))),_):"1"},q.$$arity=1)}(Opal)}}]);