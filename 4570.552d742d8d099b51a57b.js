(self.webpackChunkudonarium_lily_gk=self.webpackChunkudonarium_lily_gk||[]).push([[4570],{4570:function(ue,se,Q){Q(4656),function(u){function R(d,g){return"number"==typeof d&&"number"==typeof g?d<=g:d["$<="](g)}function b(d,g){return"number"==typeof d&&"number"==typeof g?d+g:d["$+"](g)}function B(d,g){return"number"==typeof d&&"number"==typeof g?d/g:d["$/"](g)}function V(d,g){return"number"==typeof d&&"number"==typeof g?d-g:d["$-"](g)}var g,ie,_e,j,C,T,X,F,q,G,L,P,H,K,Y,J,c,m,w,M,E=[],e=u.nil,U=u.$$$,p=u.$$,I=u.module,W=u.klass,Z=u.send2,f=u.truthy,O=u.hash,a=u.hash2,k=u.send;g=E,ie=M=[I(E[0],"BCDice")].concat(g),_e=w=[I(M[0],"GameSystem")].concat(ie),c=W(w[0],p(w,"Base"),"Skynauts"),m=[c].concat(_e),c.$$prototype.randomizer=e,u.const_set(m[0],"ID","Skynauts"),u.const_set(m[0],"NAME","\u6b6f\u8eca\u306e\u5854\u306e\u63a2\u7a7a\u58eb\uff08\u516d\u7573\u9593\u5e7b\u60f3\u7a7a\u9593\uff09"),u.const_set(m[0],"SORT_KEY","\u306f\u304f\u308b\u307e\u306e\u3068\u3046\u306e\u3059\u304b\u3044\u306e\u304a\u3064"),u.const_set(m[0],"HELP_MESSAGE","\u25c6\u5224\u5b9a\u3000(SNn)\u3001(2D6<=n)\u3000n:\u76ee\u6a19\u5024\uff08\u7701\u7565\u6642:7\uff09\n\u3000\u4f8b\uff09SN5\u3000SN5\u3000SN(3+2)\n\u25c6\u822a\u884c\u30c1\u30a7\u30c3\u30af\u3000(NV+n)\u3000n:\u4fee\u6b63\u5024\uff08\u7701\u7565\u6642:0\uff09\n\u3000\u4f8b\uff09NV\u3000NV+1\n\u25c6\u30c0\u30e1\u30fc\u30b8\u30c1\u30a7\u30c3\u30af\u3000(Dx/y@m)\u3000x:\u30c0\u30e1\u30fc\u30b8\u5de6\u5074\u306e\u5024\u3001y:\u30c0\u30e1\u30fc\u30b8\u53f3\u5074\u306e\u5024\n\u3000m:\u300a\u5f3e\u9053\u5b66\u300b\uff08\u7701\u7565\u53ef\uff09\u4e0a:8\u3001\u4e0b:2\u3001\u5de6:4\u3001\u53f3:6\n\u3000\u98db\u7a7a\u8247\u30b7\u30fc\u30c8\u5916\u306e\u5ea7\u6a19\u306f()\u304c\u4ed8\u304d\u307e\u3059\u3002\n\u3000\u4f8b\uff09 D/4\u3000D19/2\u3000D/3@8\u3000D[\u5927\u63fa\u308c]/2\n\u25c6\u7832\u6483\u5224\u5b9a+\u30c0\u30e1\u30fc\u30b8\u30c1\u30a7\u30c3\u30af\u3000(BOMn/Dx/y@m)\u3000n:\u76ee\u6a19\u5024\uff08\u7701\u7565\u6642:7\uff09\n\u3000x:\u30c0\u30e1\u30fc\u30b8\u5de6\u5074\u306e\u5024\u3001y:\u30c0\u30e1\u30fc\u30b8\u53f3\u5074\u306e\u5024\n\u3000m:\u300a\u5f3e\u9053\u5b66\u300b\uff08\u7701\u7565\u53ef\uff09\u4e0a:8\u3001\u4e0b:2\u3001\u5de6:4\u3001\u53f3:6\n\u3000\u4f8b\uff09 BOM/D/4\u3000BOM9/D19/2@4\n\u25c6\u300a\u56de\u907f\u904b\u52d5\u300b\u3000(AVOn@mXX)\u3000n:\u76ee\u6a19\u5024\uff08\u7701\u7565\u6642:7\uff09\n\u3000m:\u56de\u907f\u65b9\u5411\u3002\u4e0a:8\u3001\u4e0b:2\u3001\u5de6:4\u3001\u53f3:6\u3001XX\uff1a\u30c0\u30e1\u30fc\u30b8\u30c1\u30a7\u30c3\u30af\u7d50\u679c\n\u3000\u4f8b\uff09\n\u3000AVO9@8[\u7e261,\u6a2a4],[\u7e262,\u6a2a6],[\u7e263,\u6a2a8]\u3000AVO@2[\u7e266,\u6a2a4],[\u7e262,\u6a2a6]\n"),c.$register_prefix("D","2D6<=","SN","NV","AVO","BOM"),u.def(c,"$initialize",j=function(n){var i=this;return j.$$p&&(j.$$p=null),Z(i,u.find_super_dispatcher(i,"initialize",j,!1,!0),"initialize",[n],null),i.round_type=U(p(m,"RoundType"),"FLOOR")},j.$$arity=1),u.def(c,"$eval_game_system_specific_command",C=function(n){var _,i,$,r,t=this;return t.$debug("\n=======================================\n"),t.$debug("eval_game_system_specific_command command",n),f(_=f(i=f($=f(r=t.$get_judge_result(n))?r:t.$navigation_result(n))?$:t.$get_fire_result(n))?i:t.$get_bomb_result(n))?_:t.$get_avoid_result(n)},C.$$arity=1),c.$private(),u.def(c,"$get_judge_result",T=function(n){var i,t=this,_=e,$=e,r=e,s=e,o=e;return f(_=f(i=/^2D6<=(\d)$/i.$match(n))?i:/^SN(\d*)$/i.$match(n))?(t.$debug("====get_judge_result===="),$=f(_["$[]"](1)["$empty?"]())?7:_["$[]"](1).$to_i(),t.$debug("\u76ee\u6a19\u5024",$),o="(2D6<="+$+") \uff1e "+(s=(r=t.randomizer.$roll_barabara(2,6)).$sum())+"["+r.$join(",")+"] \uff1e "+s,f(R(s,2))?p(m,"Result").$fumble(b(o," \uff1e \u30d5\u30a1\u30f3\u30d6\u30eb")):f(R(s,$))?p(m,"Result").$success(b(o," \uff1e \u6210\u529f")):p(m,"Result").$failure(b(o," \uff1e \u5931\u6557"))):e},T.$$arity=1),u.def(c,"$navigation_result",X=function(n){var t=this,_=e,i=e,$=e,r=e,s=e;return f(_=/^NV(\+(\d+))?$/.$match(n))?(t.$debug("====navigation_result===="),i=_["$[]"](2).$to_i(),t.$debug("\u79fb\u52d5\u4fee\u6b63",i),$=t.randomizer.$roll_once(6),s=b(r=f(R(B($,2).$to_i(),0))?1:B($,2).$to_i(),i),t.$debug("\u79fb\u52d5\u30a8\u30ea\u30a2\u6570",s),p(m,"Result").$new("\u822a\u884c\u30c1\u30a7\u30c3\u30af(\u6700\u4f4e1)\u3000(1D6/2+"+i+") \uff1e "+$+" /2+"+i+" \uff1e "+r+"+"+i+" \uff1e "+s+"\u30a8\u30ea\u30a2\u9032\u3080")):e},X.$$arity=1),u.const_set(m[0],"DIRECTION_INFOS",O(1,a(["name","position_diff"],{name:"\u5de6\u4e0b",position_diff:a(["x","y"],{x:-1,y:1})}),2,a(["name","position_diff"],{name:"\u4e0b",position_diff:a(["x","y"],{x:0,y:1})}),3,a(["name","position_diff"],{name:"\u53f3\u4e0b",position_diff:a(["x","y"],{x:1,y:1})}),4,a(["name","position_diff"],{name:"\u5de6",position_diff:a(["x","y"],{x:-1,y:0})}),6,a(["name","position_diff"],{name:"\u53f3",position_diff:a(["x","y"],{x:1,y:0})}),7,a(["name","position_diff"],{name:"\u5de6\u4e0a",position_diff:a(["x","y"],{x:-1,y:-1})}),8,a(["name","position_diff"],{name:"\u4e0a",position_diff:a(["x","y"],{x:0,y:-1})}),9,a(["name","position_diff"],{name:"\u53f3\u4e0a",position_diff:a(["x","y"],{x:1,y:-1})})).$freeze()),u.def(c,"$get_direction_info",F=function(n,t,_){var $=e;return null==_&&(_=e),$=p(m,"DIRECTION_INFOS")["$[]"](n.$to_i()),f($["$nil?"]())?_:$["$[]"](t)},F.$$arity=-3),u.def(c,"$get_fire_result",q=function(n){var t=this,_=e,i=e,$=e,r=e,s=e,o=e;return f(_=/^D([12346789]*)(\[.+\])*\/(\d{1,2})(@([2468]))?$/.$match(n))?(t.$debug("====get_fire_result===="),i=_["$[]"](3).$to_i(),$=_["$[]"](1).$to_s(),r=_["$[]"](5).$to_i(),t.$debug("fire_count",i),t.$debug("fire_range",$),t.$debug("ballistics",r),s=t.$get_fire_point($,i),o=[n,t.$get_fire_point_text(s,i).$text()],f(r["$!="](0))&&(o["$<<"]("\u300a\u5f3e\u9053\u5b66\u300b:"+t.$get_direction_info(r,"name","")+"\n"),o["$<<"](t.$get_fire_point_text(s,i,r).$text())),p(m,"Result").$new(o.$join(" \uff1e "))):e},q.$$arity=1),u.def(c,"$get_fire_point",G=function(n,t){var _,i=this,$=e;return i.$debug("====get_fire_point===="),$=[],k(t,"times",[],((_=function(s){var v,l,h,o=null==_.$$s?this:_.$$s,N=e;return null==o.randomizer&&(o.randomizer=e),null==s&&(s=e),o.$debug("\n\u7832\u6483\u56de\u6570",b(s,1)),$["$<<"]([]),l=o.randomizer.$roll_once(6),h=o.randomizer.$roll_sum(2,6),N=[h,l],$["$[]"](-1)["$<<"](N),o.$debug("\u7740\u5f3e\u70b9",$),k(n,"chars",[],((v=function(y){var z=null==v.$$s?this:v.$$s,D=e;return null==y&&(y=e),z.$debug("\u7bc4\u56f2",y),D=z.$get_direction_info(y,"position_diff",a([],{})),N=[b(h,D["$[]"]("x").$to_i()),b(l,D["$[]"]("y").$to_i())],$["$[]"](-1)["$<<"](N),z.$debug("\u7740\u5f3e\u70b9:\u7bc4\u56f2",$)}).$$s=o,v.$$arity=1,v))}).$$s=i,_.$$arity=1,_)),i.$debug("\n\u6700\u7d42\u7740\u5f3e\u70b9",$),$},G.$$arity=2),u.def(c,"$get_fire_point_text",L=function(n,t,_){var i,r=e;return null==_&&(_=0),this.$debug("====get_fire_point_text===="),r=[],k(n,"each",[],((i=function(o){var l,h=e;return null==o&&(o=e),h="",k(o,"each",[],((l=function(S,y){var D,A,z=null==l.$$s?this:l.$$s;return null==S&&(S=e),null==y&&(y=e),A=z.$get_move_point(S,y,_),D=u.to_ary(A),h=b(h,f(z["$in_map_position?"](S=null==D[0]?e:D[0],y=null==D[1]?e:D[1]))?"[\u7e26"+y+",\u6a2a"+S+"]":"([\u7e26"+y+",\u6a2a"+S+"])"),z.$debug("\u7740\u5f3e\u70b9\u30c6\u30ad\u30b9\u30c8",h)}).$$s=null==i.$$s?this:i.$$s,l.$$arity=2,l)),r["$<<"](h)}).$$s=this,i.$$arity=1,i)),p(m,"Result").$new(r.$join(","))},L.$$arity=-3),u.def(c,"$in_map_position?",P=function(n,t){var i,$,r=e;return f(i=f($=R(1,t))?R(t,6):$)?f(r=R(2,n))?R(n,12):r:i},P.$$arity=2),u.def(c,"$get_move_point",H=function(n,t,_){var i=this,$=e;return i.$debug("====get_move_point===="),i.$debug("\u65b9\u5411",_),i.$debug("\u5ea7\u6a19\u79fb\u52d5\u524d(x,y)",n,t),n=b(n,($=i.$get_direction_info(_,"position_diff",a([],{})))["$[]"]("x").$to_i()),t=b(t,$["$[]"]("y").$to_i()),i.$debug("\n\u5ea7\u6a19\u79fb\u52d5\u5f8c(x,y)",n,t),[n,t]},H.$$arity=3),u.def(c,"$get_bomb_result",K=function(n){var t=this,_=e,i=e,$=e,r=e,s=e,o=e;return f(_=/^BOM(\d*)?\/D([12346789]*)(\[.+\])*\/(\d+)(@([2468]))?$/i.$match(n))?(t.$debug("====get_bomb_result====",n),i=_["$[]"](1).$to_s(),$=_["$[]"](6).$to_i(),t.$debug("\u5f3e\u9053\u5b66\u65b9\u5411",$),r=t.$get_judge_result(b("SN",i)),f(r["$failure?"]())?(s=[n+" \uff1e "+r.$text()],k(r,"text=",u.to_a(s)),V(s.length,1),r):(o=n.$slice(/D([12346789]*)(\[.+\])*\/(\d+)(@([2468]))?/),s=[n+" \uff1e "+r.$text()+"\n \uff1e "+t.$get_fire_result(o).$text()],k(r,"text=",u.to_a(s)),V(s.length,1),r)):e},K.$$arity=1),u.def(c,"$get_avoid_result",Y=function(n){var t=this,_=e,i=e,$=e,r=e,s=e,o=e,v=e,l=e;return f(_=/^AVO(\d*)?(@([2468]))(\(?\[\u7e26\d+,\u6a2a\d+\]\)?,?)+$/.$match(n))?(t.$debug("====get_avoid_result====",n),i=_["$[]"](3).$to_i(),t.$debug("\u56de\u907f\u65b9\u5411",i),$=n.$slice(/^AVO(\d*)?(@([2468]))/),r=t.$get_judge_result(b("SN",p(m,"Regexp").$last_match(1).$to_s())),f(r["$failure?"]())?(s=[$+" \uff1e \u300a\u56de\u907f\u904b\u52d5\u300b"+r.$text()],k(r,"text=",u.to_a(s)),V(s.length,1),r):(o=n.$slice(/(\(?\[\u7e26\d+,\u6a2a\d+\]\)?,?)+/),l=(v=t.$scan_fire_point(o)).$size(),p(m,"Result").$success([$,"\u300a\u56de\u907f\u904b\u52d5\u300b"+r.$text()+"\n",o,b(b("\u300a\u56de\u907f\u904b\u52d5\u300b:",t.$get_direction_info(i,"name","")),"\n"),t.$get_fire_point_text(v,l,i).$text()].$compact().$join(" \uff1e ")))):e},Y.$$arity=1),u.def(c,"$scan_fire_point",J=function(n){var t,i=e;return this.$debug("====scan_fire_point====",n),n=n.$gsub(/\(|\)/,""),i=[],k(n.$split(/\],/),"each",[],((t=function(r){var o,s=null==t.$$s?this:t.$$s;return null==r&&(r=e),s.$debug("point_text",r),i["$<<"]([]),k(r.$split(/\]/),"each",[],((o=function(l){var h=null==o.$$s?this:o.$$s,N=e,y=e;return null==l&&(l=e),h.$debug("point",l),i["$[]"](-1)["$<<"]([]),f(l["$=~"](/[^\d]*(\d+),[^\d]*(\d+)/))?(N=p(m,"Regexp").$last_match(1).$to_i(),y=[-1,[p(m,"Regexp").$last_match(2).$to_i(),N]],k(i["$[]"](-1),"[]=",u.to_a(y)),V(y.length,1),h.$debug("\u7740\u5f3e\u70b9",i)):e}).$$s=s,o.$$arity=1,o))}).$$s=this,t.$$arity=1,t)),i},J.$$arity=1)}(Opal)}}]);