(function() { var list_1_Int32__NilInt32, list_1_Int32__ConsInt32, list_1_HTMLElement__NilHTMLElement_, list_1_HTMLElement__ConsHTMLElement_, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, UnfoldEnumerator_2_IEnumerator_1_Int32__Int32___ctor$IEnumerator_1_Int32__Int32, UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32, UnfoldEnumerator_2_FSharpList_1_HTMLElement__HTMLElement___ctor$FSharpList_1_HTMLElement__HTMLElement_, TupleInt32_Int32, TupleInt32_IEnumerator_1_Int32_, TupleInt32_FSharpList_1_Int32_, TupleHTMLElement__FSharpList_1_HTMLElement_, String__PrintFormatToString$, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__Unfold$IEnumerator_1_Int32__Int32_IEnumerator_1_Int32__Int32, Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__Unfold$FSharpList_1_HTMLElement__HTMLElement_FSharpList_1_HTMLElement__HTMLElement_, Seq__ToList$Int32_Int32, Seq__OfList$Int32_Int32, Seq__OfList$HTMLElement_HTMLElement_, Seq__Map$Int32__Int32_Int32_Int32, Seq__Iterate$HTMLElement_HTMLElement_, Seq__FromFactory$Int32_Int32, Seq__FromFactory$HTMLElement_HTMLElement_, Seq__FoldIndexedAux$Unit__HTMLElement_Unit__HTMLElement_, Seq__FoldIndexedAux$Int32__Int32_Int32_Int32, Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__FoldIndexed$Int32__Int32_Int32_Int32, Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__FoldIndexed$HTMLElement__Unit_HTMLElement__Unit_, Seq__Fold$Int32__Int32_Int32_Int32, Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__Fold$HTMLElement__Unit_HTMLElement__Unit_, Seq__Enumerator$Int32_Int32, Seq__Enumerator$HTMLElement_HTMLElement_, Seq__Delay$Int32_Int32, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_, Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_, Option__IsSome$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Tuple_2_Int32__IEnumerator_1_Int32_Tuple_2_Int32__IEnumerator_1_Int32_, Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_, Option__GetValue$Tuple_2_HTMLElement__FSharpList_1_HTMLElement_Tuple_2_HTMLElement__FSharpList_1_HTMLElement_, Option__GetValue$Int32_Int32, Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_, Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_, Main_1_sigma$Int32_Int32, Main_1_showFactorial$, Main_1_say$, Main_1_op_MinusLess$HTMLElement_HTMLElement_, Main_1_n, Main_1_main$, Main_1_get_n$, Main_1_get_get$, Main_1_get_endOfEvent$, Main_1_get_create$, Main_1_get_content$, Main_1_get, Main_1_factorial$, Main_1_endOfEvent, Main_1_create, Main_1_content, List__Tail$Int32_Int32, List__Tail$HTMLElement_HTMLElement_, List__Reverse$Int32_Int32, List__Head$Int32_Int32, List__Head$HTMLElement_HTMLElement_, List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32, List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_, List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_, List__Empty$Int32_Int32, List__Empty$HTMLElement_HTMLElement_, List__CreateCons$Int32_Int32, List__CreateCons$HTMLElement_HTMLElement_, CreateEnumerable_1_Int32___ctor$Int32, CreateEnumerable_1_HTMLElement___ctor$HTMLElement_;
CreateEnumerable_1_HTMLElement___ctor$HTMLElement_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
List__CreateCons$HTMLElement_HTMLElement_ = (function(x,xs)
{
    return (new list_1_HTMLElement__ConsHTMLElement_(x, xs));
});
List__CreateCons$Int32_Int32 = (function(x,xs)
{
    return (new list_1_Int32__ConsInt32(x, xs));
});
List__Empty$HTMLElement_HTMLElement_ = (function()
{
    return (new list_1_HTMLElement__NilHTMLElement_());
});
List__Empty$Int32_Int32 = (function()
{
    return (new list_1_Int32__NilInt32());
});
List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, 0, seed, xs);
});
List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32 = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Head$HTMLElement_HTMLElement_ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Head$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Reverse$Int32_Int32 = (function(xs)
{
    return List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Int32__ConsInt32(x, acc));
      });
    }), (new list_1_Int32__NilInt32()), xs);
});
List__Tail$HTMLElement_HTMLElement_ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Tail$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
Main_1_factorial$ = (function(n)
{
    return Seq__Fold$Int32__Int32_Int32_Int32((function(x)
    {
      return (function(y)
      {
        return (x * y);
      });
    }), 1, Seq__OfList$Int32_Int32(Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(1, n))));
});
Main_1_get_content$ = (function()
{
    return Main_1_get("content");
});
Main_1_get_create$ = (function()
{
    var objectArg_17_19 = (window.document);
    return (function(arg00)
    {
      return (objectArg_17_19.createElement(arg00));
    });
});
Main_1_get_endOfEvent$ = (function()
{
    return {};
});
Main_1_get_get$ = (function()
{
    var objectArg_18_18 = (window.document);
    return (function(arg00)
    {
      return (objectArg_18_18.getElementById(arg00));
    });
});
Main_1_get_n$ = (function()
{
    return 1;
});
Main_1_main$ = (function(unitVar0)
{
    (Main_1_content.addEventListener("click", (function(_arg1)
    {
      return Main_1_showFactorial$();
    })));
    Main_1_say$("Main method");
    var clo1 = String__PrintFormatToString$("sum of [1..10] = %A");
    return Main_1_say$((function(arg10)
    {
      return clo1(arg10);
    })(Main_1_sigma$Int32_Int32((function(x)
    {
      return x;
    }), Seq__OfList$Int32_Int32(Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(1, 10))))));
});
Main_1_op_MinusLess$HTMLElement_HTMLElement_ = (function(parent,children)
{
    return Seq__Iterate$HTMLElement_HTMLElement_((function(x)
    {
      var ignored0 = (parent.appendChild(x));
    }), children);
});
Main_1_say$ = (function(msg)
{
    return ((window.window).alert(msg));
});
Main_1_showFactorial$ = (function(unitVar0)
{
    var div = Main_1_create("div");
    var clo1 = String__PrintFormatToString$("factorial(%d) = %d");
    var clo1 = String__PrintFormatToString$("factorial(%d) = %d");
    (div.textContent) = (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        return clo2(arg20);
      });
    })(Main_1_n)(Main_1_factorial$(Main_1_n));
    null;
    Main_1_op_MinusLess$HTMLElement_HTMLElement_(Main_1_content, Seq__OfList$HTMLElement_HTMLElement_(List__CreateCons$HTMLElement_HTMLElement_(div, List__Empty$HTMLElement_HTMLElement_())));
    Main_1_n = (Main_1_n + 1);
    return Main_1_endOfEvent;
});
Main_1_sigma$Int32_Int32 = (function(f,xs)
{
    var folder = (function(x)
    {
      return (function(y)
      {
        return (x + y);
      });
    });
    var state = 0;
    return (function(source)
    {
      return Seq__Fold$Int32__Int32_Int32_Int32(folder, state, source);
    })(Seq__Map$Int32__Int32_Int32_Int32(f, xs));
});
Option__GetValue$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_HTMLElement__FSharpList_1_HTMLElement_Tuple_2_HTMLElement__FSharpList_1_HTMLElement_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__IEnumerator_1_Int32_Tuple_2_Int32__IEnumerator_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Seq__Delay$Int32_Int32 = (function(f)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var _679;
      return Seq__Enumerator$Int32_Int32(f(_679));
    }));
});
Seq__Enumerator$HTMLElement_HTMLElement_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Int32_Int32 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Fold$HTMLElement__Unit_HTMLElement__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$HTMLElement__Unit_HTMLElement__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__Fold$Int32__Int32_Int32_Int32 = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__Int32_Int32_Int32((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$HTMLElement__Unit_HTMLElement__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__HTMLElement_Unit__HTMLElement_(f, seed, Seq__Enumerator$HTMLElement_HTMLElement_(xs));
});
Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexed$Int32__Int32_Int32_Int32 = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Int32__Int32_Int32_Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Int32__Int32_Int32_Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__HTMLElement_Unit__HTMLElement_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$HTMLElement_HTMLElement_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_HTMLElement___ctor$HTMLElement_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _493;
        return __.factory(_493);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _126;
        return __.factory(_126);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$HTMLElement_HTMLElement_ = (function(f,xs)
{
    var _508;
    return Seq__Fold$HTMLElement__Unit_HTMLElement__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _508, xs);
});
Seq__Map$Int32__Int32_Int32_Int32 = (function(f,xs)
{
    return Seq__Delay$Int32_Int32((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_Int32__Int32_IEnumerator_1_Int32__Int32((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleInt32_IEnumerator_1_Int32_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$Int32_Int32(xs));
    }));
});
Seq__OfList$HTMLElement_HTMLElement_ = (function(xs)
{
    return Seq__Unfold$FSharpList_1_HTMLElement__HTMLElement_FSharpList_1_HTMLElement__HTMLElement_((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$HTMLElement_HTMLElement_(_arg1);
        var x = List__Head$HTMLElement_HTMLElement_(_arg1);
        return {Tag: 1.000000, Value: (new TupleHTMLElement__FSharpList_1_HTMLElement_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__OfList$Int32_Int32 = (function(xs)
{
    return Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$Int32_Int32(_arg1);
        var x = List__Head$Int32_Int32(_arg1);
        return {Tag: 1.000000, Value: (new TupleInt32_FSharpList_1_Int32_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__ToList$Int32_Int32 = (function(xs)
{
    return List__Reverse$Int32_Int32(Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$Int32_Int32(x, acc);
      });
    }), List__Empty$Int32_Int32(), xs));
});
Seq__Unfold$FSharpList_1_HTMLElement__HTMLElement_FSharpList_1_HTMLElement__HTMLElement_ = (function(f,seed)
{
    return Seq__FromFactory$HTMLElement_HTMLElement_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_HTMLElement__HTMLElement___ctor$FSharpList_1_HTMLElement__HTMLElement_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_HTMLElement__FSharpList_1_HTMLElement_Tuple_2_HTMLElement__FSharpList_1_HTMLElement_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_HTMLElement__FSharpList_1_HTMLElement_Tuple_2_HTMLElement__FSharpList_1_HTMLElement_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_HTMLElement_FSharpList_1_HTMLElement_(__.acc) && (function()
          {
            var _471;
            return next(_471);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc) && (function()
          {
            var _303;
            return next(_303);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$IEnumerator_1_Int32__Int32_IEnumerator_1_Int32__Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Int32__Int32___ctor$IEnumerator_1_Int32__Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__IEnumerator_1_Int32_Tuple_2_Int32__IEnumerator_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__IEnumerator_1_Int32_Tuple_2_Int32__IEnumerator_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_(__.acc) && (function()
          {
            var _656;
            return next(_656);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _104;
            return next(_104);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
});
TupleHTMLElement__FSharpList_1_HTMLElement_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_FSharpList_1_Int32_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_IEnumerator_1_Int32_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_FSharpList_1_HTMLElement__HTMLElement___ctor$FSharpList_1_HTMLElement__HTMLElement_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_Int32__Int32___ctor$IEnumerator_1_Int32__Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
list_1_HTMLElement__ConsHTMLElement_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_HTMLElement__NilHTMLElement_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Int32__ConsInt32 = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Int32__NilInt32 = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
Main_1_get = Main_1_get_get$();
Main_1_content = Main_1_get_content$();
Main_1_create = Main_1_get_create$();
Main_1_n = Main_1_get_n$();
Main_1_endOfEvent = Main_1_get_endOfEvent$();
return (function(arg00_)
{
    return Main_1_main$();
})(); })();