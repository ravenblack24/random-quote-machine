(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{19:function(e,t,o){e.exports=o(20)},20:function(e,t,o){"use strict";o.r(t);var a=o(4),n=o(7),r=o(8),c=o(10),u=o(9),i=o(1),s=o.n(i),l=o(15),h=o.n(l),m=o(16),p=o.n(m),d=o(17),b=(o(31),o(5)),q=o(6),f=o(12),w=[{quote:"Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die.",author:"Captain Kirk",color:"#B233FF"},{quote:"Change is the essential process of all existence.",author:"Spock",color:"#462255"},{quote:"With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably.",author:"Jean-Luc Picard",color:"#FF3380"},{quote:"You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.",author:"Spock",color:"#FF4C33"},{quote:"Live now; make now always the most precious time. Now will never come again.",author:"Jean-Luc Picard",color:"#FFB233"},{quote:"Compassion: that's the one things no machine ever had. Maybe it's the one thing that keeps men ahead of them.",author:"Dr. McCoy",color:"#313B72"}],g=function(e){Object(c.a)(o,e);var t=Object(u.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var e,t,o;switch(this.props.type){case"Twitter":e="https://twitter.com/intent/tweet?hashtags=quotes&text="+this.props.quote+" - "+this.props.author,t=b.b,o="tweet-quote";break;case"Tumblr":e="https://www.tumblr.com/widgets/share/tool?posttype=quote&caption="+this.props.author+"&content="+this.props.quote,t=b.a,o="tumblr-quote";break;default:e="#",t=q.a,o="unknown-quote"}return s.a.createElement("a",{href:e,className:"quote-social",id:o,style:{backgroundColor:this.props.color}},s.a.createElement(f.a,{icon:t,style:{backgroundColor:this.props.color}}))}}]),o}(s.a.Component),v=function(e){Object(c.a)(o,e);var t=Object(u.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return s.a.createElement("blockquote",{className:"quote-container",style:{color:this.props.color}},s.a.createElement("p",{className:"quote",id:"text"},s.a.createElement(f.a,{icon:q.b,className:"quote-icon"}),this.props.quote),s.a.createElement("footer",{class:"author",id:"author"},"- ",this.props.author))}}]),o}(s.a.Component),k=function(e){Object(c.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(n.a)(this,o),(r=t.call(this,e)).getRandomQuote=r.getRandomQuote.bind(Object(a.a)(r)),r.state={quoteId:0},r}return Object(r.a)(o,[{key:"componentDidMount",value:function(){this.getRandomQuote()}},{key:"getRandomQuote",value:function(){var e,t=(e=w.length,Math.floor(Math.random()*Math.floor(e)));this.setState({quoteId:t})}},{key:"render",value:function(){var e=w[this.state.quoteId].quote,t=w[this.state.quoteId].author,o=w[this.state.quoteId].color;return document.body.style.backgroundColor=o,s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"ReactJS - Random Quote Generator"),s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})),s.a.createElement("section",{id:"quote-box"},s.a.createElement(v,{quote:e,author:t,color:o}),s.a.createElement(g,{type:"Twitter",quote:e,author:t,color:o}),s.a.createElement(g,{type:"Tumblr",quote:e,author:t,color:o}),s.a.createElement("button",{id:"new-quote",onClick:this.getRandomQuote,className:"quote-button",style:{background:o}},"New quote")),s.a.createElement(p.a,null))}}]),o}(s.a.Component);h.a.render(s.a.createElement(k,null),document.getElementById("root"))},31:function(e,t,o){}},[[19,1,2]]]);
//# sourceMappingURL=main.34d659a3.chunk.js.map