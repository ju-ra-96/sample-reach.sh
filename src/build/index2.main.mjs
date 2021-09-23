// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      "Main": {
        status: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Ibo shipped the product to the customer.                        ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'IBO received the certified product.                             ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Certification Authority shipped product to IBO.                 ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Certification Authority successfully certified the product!     ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Certification Authority received the product.                   ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'IBO shipped the product to the Certification Authority.         ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'IBO received finished product.                                  ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Supplier shipped the finished product to IBO.                   ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Supplier received the CAD files.                                ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'IBO sent CAD files to the Supplier.                             ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 11))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Customer paid the 5 requested algos.                            ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'Customer accepted the terms.                                    ';}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 13))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return 'IBO showed the Terms for the product.                           ';}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        step: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 13);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, 12);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:142:14:decimal', stdlib.UInt_max, 11);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:131:14:decimal', stdlib.UInt_max, 10);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:121:14:decimal', stdlib.UInt_max, 9);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:112:14:decimal', stdlib.UInt_max, 8);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:102:14:decimal', stdlib.UInt_max, 7);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:91:14:decimal', stdlib.UInt_max, 6);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:82:14:decimal', stdlib.UInt_max, 5);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, 4);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 11))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:62:14:decimal', stdlib.UInt_max, 3);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:58:14:decimal', stdlib.UInt_max, 2);}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 13))) {
              const [] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, 1);}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: []
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Cert(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Cert expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Cert expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc4]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc2], false, false));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 0, [], false, false));
  const [] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v33, v37);
  stdlib.assert(v40, {
    at: './index.rsh:60:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn4 = await (ctc.recv(4, 1, [ctc2], false, false));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn5 = await (ctc.recv(5, 1, [ctc2], false, false));
  const [v56] = txn5.data;
  const v58 = txn5.time;
  const v55 = txn5.from;
  ;
  const txn6 = await (ctc.recv(6, 1, [ctc2], false, false));
  const [v64] = txn6.data;
  const v67 = txn6.time;
  const v63 = txn6.from;
  ;
  const v66 = stdlib.addressEq(v55, v63);
  stdlib.assert(v66, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn7 = await (ctc.recv(7, 1, [ctc2], false, false));
  const [v73] = txn7.data;
  const v76 = txn7.time;
  const v72 = txn7.from;
  ;
  const v75 = stdlib.addressEq(v24, v72);
  stdlib.assert(v75, {
    at: './index.rsh:100:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn8 = await (ctc.recv(8, 1, [ctc2], false, false));
  const [v82] = txn8.data;
  const v85 = txn8.time;
  const v81 = txn8.from;
  ;
  const v84 = stdlib.addressEq(v24, v81);
  stdlib.assert(v84, {
    at: './index.rsh:110:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const v89 = stdlib.protect(ctc2, await interact.ackProductReceived(v25), {
    at: './index.rsh:117:72:application',
    fs: ['at ./index.rsh:116:9:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)'],
    msg: 'ackProductReceived',
    who: 'Cert'
    });
  
  const txn9 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:119:8:dot', stdlib.UInt_max, 3), [ctc4, ctc1, ctc4, ctc1, ctc2], [v24, v26, v33, v85, v89], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn9) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:119:8:dot', stdlib.UInt_max, 8), v24, v26, v33, v85]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:119:8:dot', stdlib.UInt_max, 8), v24, v26, v33]);
    const [v91] = txn9.data;
    const v93 = txn9.time;
    const v90 = txn9.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:122:13:after expr stmt semicolon', stdlib.UInt_max, 9), v24, v26, v33, v90, v93]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:122:13:after expr stmt semicolon', stdlib.UInt_max, 9), v24, v26, v33, v90]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:122:13:after expr stmt semicolon', stdlib.UInt_max, 5)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v91] = txn9.data;
  const v93 = txn9.time;
  const v90 = txn9.from;
  ;
  const v97 = stdlib.protect(ctc2, await interact.certified(v25), {
    at: './index.rsh:127:51:application',
    fs: ['at ./index.rsh:126:8:application call to [unknown function] (defined at: ./index.rsh:126:12:function exp)'],
    msg: 'certified',
    who: 'Cert'
    });
  
  const txn10 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:129:6:dot', stdlib.UInt_max, 4), [ctc4, ctc1, ctc4, ctc4, ctc1, ctc2], [v24, v26, v33, v90, v93, v97], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn10) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:129:6:dot', stdlib.UInt_max, 9), v24, v26, v33, v90, v93]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:6:dot', stdlib.UInt_max, 9), v24, v26, v33, v90]);
    const [v99] = txn10.data;
    const v102 = txn10.time;
    const v98 = txn10.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v101 = stdlib.addressEq(v90, v98);
    stdlib.assert(v101, {
      at: './index.rsh:129:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Cert'
      });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:132:11:after expr stmt semicolon', stdlib.UInt_max, 10), v24, v26, v33, v90, v102]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:132:11:after expr stmt semicolon', stdlib.UInt_max, 10), v24, v26, v33, v90]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:132:11:after expr stmt semicolon', stdlib.UInt_max, 4)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v99] = txn10.data;
  const v102 = txn10.time;
  const v98 = txn10.from;
  ;
  const v101 = stdlib.addressEq(v90, v98);
  stdlib.assert(v101, {
    at: './index.rsh:129:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const v106 = stdlib.protect(ctc2, await interact.shippedProduct('IBO                                                             ', 'successful certification                                        '), {
    at: './index.rsh:138:53:application',
    fs: ['at ./index.rsh:137:8:application call to [unknown function] (defined at: ./index.rsh:137:12:function exp)'],
    msg: 'shippedProduct',
    who: 'Cert'
    });
  
  const txn11 = await (ctc.sendrecv(11, 1, stdlib.checkedBigNumberify('./index.rsh:140:6:dot', stdlib.UInt_max, 4), [ctc4, ctc1, ctc4, ctc4, ctc1, ctc2], [v24, v26, v33, v90, v102, v106], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn11) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:140:6:dot', stdlib.UInt_max, 10), v24, v26, v33, v90, v102]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:140:6:dot', stdlib.UInt_max, 10), v24, v26, v33, v90]);
    const [v108] = txn11.data;
    const v111 = txn11.time;
    const v107 = txn11.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v110 = stdlib.addressEq(v90, v107);
    stdlib.assert(v110, {
      at: './index.rsh:140:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Cert'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:143:11:after expr stmt semicolon', stdlib.UInt_max, 11), v24, v26, v33, v111]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:143:11:after expr stmt semicolon', stdlib.UInt_max, 11), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:143:11:after expr stmt semicolon', stdlib.UInt_max, 3)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v108] = txn11.data;
  const v111 = txn11.time;
  const v107 = txn11.from;
  ;
  const v110 = stdlib.addressEq(v90, v107);
  stdlib.assert(v110, {
    at: './index.rsh:140:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn12 = await (ctc.recv(12, 1, [ctc2], false, false));
  const [v117] = txn12.data;
  const v120 = txn12.time;
  const v116 = txn12.from;
  ;
  const v119 = stdlib.addressEq(v24, v116);
  stdlib.assert(v119, {
    at: './index.rsh:151:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn13 = await (ctc.recv(13, 1, [ctc2], false, false));
  const [v126] = txn13.data;
  const v129 = txn13.time;
  const v125 = txn13.from;
  ;
  const v128 = stdlib.addressEq(v24, v125);
  stdlib.assert(v128, {
    at: './index.rsh:161:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  const txn14 = await (ctc.recv(14, 1, [ctc2], false, false));
  const [v135] = txn14.data;
  const v138 = txn14.time;
  const v134 = txn14.from;
  ;
  const v137 = stdlib.addressEq(v33, v134);
  stdlib.assert(v137, {
    at: './index.rsh:169:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Cert'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Customer(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Customer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc4, ctc1]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const v32 = stdlib.protect(ctc2, await interact.acceptTerms(v25), {
    at: './index.rsh:55:52:application',
    fs: ['at ./index.rsh:54:8:application call to [unknown function] (defined at: ./index.rsh:54:12:function exp)'],
    msg: 'acceptTerms',
    who: 'Customer'
    });
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:56:4:dot', stdlib.UInt_max, 2), [ctc4, ctc1, ctc1, ctc2], [v24, v26, v28, v32], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:56:4:dot', stdlib.UInt_max, 1), v24, v26, v28]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:56:4:dot', stdlib.UInt_max, 1), v24, v26]);
    const [v34] = txn2.data;
    const v36 = txn2.time;
    const v33 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v26, v33, v36]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v26, v33]);
    sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, 12)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('./index.rsh:60:4:dot', stdlib.UInt_max, 3), [ctc4, ctc1, ctc4, ctc1], [v24, v26, v33, v36], [v26, []], [], true, true, false, (async (txn3) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:60:4:dot', stdlib.UInt_max, 2), v24, v26, v33, v36]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:60:4:dot', stdlib.UInt_max, 2), v24, v26, v33]);
    const [] = txn3.data;
    const v41 = txn3.time;
    const v37 = txn3.from;
    
    sim_r.txns.push({
      amt: v26,
      kind: 'to',
      tok: undefined
      });
    const v40 = stdlib.addressEq(v33, v37);
    stdlib.assert(v40, {
      at: './index.rsh:60:4:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v26, v33, v41]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v26, v33]);
    sim_r.view = [ctc7, [stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, 11)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v33, v37);
  stdlib.assert(v40, {
    at: './index.rsh:60:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn4 = await (ctc.recv(4, 1, [ctc2], false, false));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn5 = await (ctc.recv(5, 1, [ctc2], false, false));
  const [v56] = txn5.data;
  const v58 = txn5.time;
  const v55 = txn5.from;
  ;
  const txn6 = await (ctc.recv(6, 1, [ctc2], false, false));
  const [v64] = txn6.data;
  const v67 = txn6.time;
  const v63 = txn6.from;
  ;
  const v66 = stdlib.addressEq(v55, v63);
  stdlib.assert(v66, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn7 = await (ctc.recv(7, 1, [ctc2], false, false));
  const [v73] = txn7.data;
  const v76 = txn7.time;
  const v72 = txn7.from;
  ;
  const v75 = stdlib.addressEq(v24, v72);
  stdlib.assert(v75, {
    at: './index.rsh:100:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn8 = await (ctc.recv(8, 1, [ctc2], false, false));
  const [v82] = txn8.data;
  const v85 = txn8.time;
  const v81 = txn8.from;
  ;
  const v84 = stdlib.addressEq(v24, v81);
  stdlib.assert(v84, {
    at: './index.rsh:110:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn9 = await (ctc.recv(9, 1, [ctc2], false, false));
  const [v91] = txn9.data;
  const v93 = txn9.time;
  const v90 = txn9.from;
  ;
  const txn10 = await (ctc.recv(10, 1, [ctc2], false, false));
  const [v99] = txn10.data;
  const v102 = txn10.time;
  const v98 = txn10.from;
  ;
  const v101 = stdlib.addressEq(v90, v98);
  stdlib.assert(v101, {
    at: './index.rsh:129:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn11 = await (ctc.recv(11, 1, [ctc2], false, false));
  const [v108] = txn11.data;
  const v111 = txn11.time;
  const v107 = txn11.from;
  ;
  const v110 = stdlib.addressEq(v90, v107);
  stdlib.assert(v110, {
    at: './index.rsh:140:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn12 = await (ctc.recv(12, 1, [ctc2], false, false));
  const [v117] = txn12.data;
  const v120 = txn12.time;
  const v116 = txn12.from;
  ;
  const v119 = stdlib.addressEq(v24, v116);
  stdlib.assert(v119, {
    at: './index.rsh:151:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn13 = await (ctc.recv(13, 1, [ctc2], false, false));
  const [v126] = txn13.data;
  const v129 = txn13.time;
  const v125 = txn13.from;
  ;
  const v128 = stdlib.addressEq(v24, v125);
  stdlib.assert(v128, {
    at: './index.rsh:161:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const v133 = stdlib.protect(ctc2, await interact.ackProductReceived(v25), {
    at: './index.rsh:168:70:application',
    fs: ['at ./index.rsh:167:8:application call to [unknown function] (defined at: ./index.rsh:167:12:function exp)'],
    msg: 'ackProductReceived',
    who: 'Customer'
    });
  
  const txn14 = await (ctc.sendrecv(14, 1, stdlib.checkedBigNumberify('./index.rsh:169:6:dot', stdlib.UInt_max, 3), [ctc4, ctc1, ctc4, ctc1, ctc2], [v24, v26, v33, v129, v133], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn14) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:169:6:dot', stdlib.UInt_max, 13), v24, v26, v33, v129]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:169:6:dot', stdlib.UInt_max, 13), v24, v26, v33]);
    const [v135] = txn14.data;
    const v138 = txn14.time;
    const v134 = txn14.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v137 = stdlib.addressEq(v33, v134);
    stdlib.assert(v137, {
      at: './index.rsh:169:6:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    sim_r.txns.push({
      amt: v26,
      kind: 'from',
      to: v24,
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc3, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
    sim_r.view = [ctc3, []];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v135] = txn14.data;
  const v138 = txn14.time;
  const v134 = txn14.from;
  ;
  const v137 = stdlib.addressEq(v33, v134);
  stdlib.assert(v137, {
    at: './index.rsh:169:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function IBO(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for IBO expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for IBO expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.request, 'for IBO\'s interact field request');
  
  const v23 = stdlib.protect(ctc1, await interact.showTerms(), {
    at: './index.rsh:44:46:application',
    fs: ['at ./index.rsh:43:7:application call to [unknown function] (defined at: ./index.rsh:43:11:function exp)'],
    msg: 'showTerms',
    who: 'IBO'
    });
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, 0), [ctc0, ctc1, ctc0], [v19, v23, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, 0)]);
    const [v25, v26] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:49:9:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v26, v28]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:49:9:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v26]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:49:9:after expr stmt semicolon', stdlib.UInt_max, 13)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc2], false, false));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 0, [], false, false));
  const [] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v33, v37);
  stdlib.assert(v40, {
    at: './index.rsh:60:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const v45 = stdlib.protect(ctc2, await interact.sentCADtoSupplier(v25), {
    at: './index.rsh:67:56:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:11:function exp)'],
    msg: 'sentCADtoSupplier',
    who: 'IBO'
    });
  
  const txn4 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:70:5:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc2], [v24, v26, v33, v41, v45], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn4) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:70:5:dot', stdlib.UInt_max, 3), v24, v26, v33, v41]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:70:5:dot', stdlib.UInt_max, 3), v24, v26, v33]);
    const [v47] = txn4.data;
    const v50 = txn4.time;
    const v46 = txn4.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v49 = stdlib.addressEq(v24, v46);
    stdlib.assert(v49, {
      at: './index.rsh:70:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'IBO'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:73:9:after expr stmt semicolon', stdlib.UInt_max, 4), v24, v26, v33, v50]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:73:9:after expr stmt semicolon', stdlib.UInt_max, 4), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:73:9:after expr stmt semicolon', stdlib.UInt_max, 10)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const txn5 = await (ctc.recv(5, 1, [ctc2], false, false));
  const [v56] = txn5.data;
  const v58 = txn5.time;
  const v55 = txn5.from;
  ;
  const txn6 = await (ctc.recv(6, 1, [ctc2], false, false));
  const [v64] = txn6.data;
  const v67 = txn6.time;
  const v63 = txn6.from;
  ;
  const v66 = stdlib.addressEq(v55, v63);
  stdlib.assert(v66, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const v71 = stdlib.protect(ctc2, await interact.ackProductReceived(v25, 'Supplier                                                        '), {
    at: './index.rsh:98:68:application',
    fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:11:function exp)'],
    msg: 'ackProductReceived',
    who: 'IBO'
    });
  
  const txn7 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:100:5:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc2], [v24, v26, v33, v67, v71], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn7) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:100:5:dot', stdlib.UInt_max, 6), v24, v26, v33, v67]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:100:5:dot', stdlib.UInt_max, 6), v24, v26, v33]);
    const [v73] = txn7.data;
    const v76 = txn7.time;
    const v72 = txn7.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v75 = stdlib.addressEq(v24, v72);
    stdlib.assert(v75, {
      at: './index.rsh:100:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'IBO'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:103:9:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v26, v33, v76]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:9:after expr stmt semicolon', stdlib.UInt_max, 7), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:103:9:after expr stmt semicolon', stdlib.UInt_max, 7)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v73] = txn7.data;
  const v76 = txn7.time;
  const v72 = txn7.from;
  ;
  const v75 = stdlib.addressEq(v24, v72);
  stdlib.assert(v75, {
    at: './index.rsh:100:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const v80 = stdlib.protect(ctc2, await interact.shippedProduct('Cert Authority                                                  ', 'of certification                                                '), {
    at: './index.rsh:108:68:application',
    fs: ['at ./index.rsh:107:7:application call to [unknown function] (defined at: ./index.rsh:107:11:function exp)'],
    msg: 'shippedProduct',
    who: 'IBO'
    });
  
  const txn8 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:110:5:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc2], [v24, v26, v33, v76, v80], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn8) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:110:5:dot', stdlib.UInt_max, 7), v24, v26, v33, v76]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:110:5:dot', stdlib.UInt_max, 7), v24, v26, v33]);
    const [v82] = txn8.data;
    const v85 = txn8.time;
    const v81 = txn8.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v84 = stdlib.addressEq(v24, v81);
    stdlib.assert(v84, {
      at: './index.rsh:110:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'IBO'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:113:11:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v26, v33, v85]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:113:11:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:113:11:after expr stmt semicolon', stdlib.UInt_max, 6)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v82] = txn8.data;
  const v85 = txn8.time;
  const v81 = txn8.from;
  ;
  const v84 = stdlib.addressEq(v24, v81);
  stdlib.assert(v84, {
    at: './index.rsh:110:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const txn9 = await (ctc.recv(9, 1, [ctc2], false, false));
  const [v91] = txn9.data;
  const v93 = txn9.time;
  const v90 = txn9.from;
  ;
  const txn10 = await (ctc.recv(10, 1, [ctc2], false, false));
  const [v99] = txn10.data;
  const v102 = txn10.time;
  const v98 = txn10.from;
  ;
  const v101 = stdlib.addressEq(v90, v98);
  stdlib.assert(v101, {
    at: './index.rsh:129:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const txn11 = await (ctc.recv(11, 1, [ctc2], false, false));
  const [v108] = txn11.data;
  const v111 = txn11.time;
  const v107 = txn11.from;
  ;
  const v110 = stdlib.addressEq(v90, v107);
  stdlib.assert(v110, {
    at: './index.rsh:140:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const v115 = stdlib.protect(ctc2, await interact.ackProductReceived(v25, 'Cert Authority                                                  '), {
    at: './index.rsh:149:69:application',
    fs: ['at ./index.rsh:148:7:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
    msg: 'ackProductReceived',
    who: 'IBO'
    });
  
  const txn12 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:151:5:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc2], [v24, v26, v33, v111, v115], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn12) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:151:5:dot', stdlib.UInt_max, 11), v24, v26, v33, v111]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:151:5:dot', stdlib.UInt_max, 11), v24, v26, v33]);
    const [v117] = txn12.data;
    const v120 = txn12.time;
    const v116 = txn12.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v119 = stdlib.addressEq(v24, v116);
    stdlib.assert(v119, {
      at: './index.rsh:151:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'IBO'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:9:after expr stmt semicolon', stdlib.UInt_max, 12), v24, v26, v33, v120]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:154:9:after expr stmt semicolon', stdlib.UInt_max, 12), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:9:after expr stmt semicolon', stdlib.UInt_max, 2)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v117] = txn12.data;
  const v120 = txn12.time;
  const v116 = txn12.from;
  ;
  const v119 = stdlib.addressEq(v24, v116);
  stdlib.assert(v119, {
    at: './index.rsh:151:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const v124 = stdlib.protect(ctc2, await interact.shippedProduct('Customer                                                        ', 'final delivery                                                  '), {
    at: './index.rsh:159:63:application',
    fs: ['at ./index.rsh:158:7:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)'],
    msg: 'shippedProduct',
    who: 'IBO'
    });
  
  const txn13 = await (ctc.sendrecv(13, 1, stdlib.checkedBigNumberify('./index.rsh:161:5:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc2], [v24, v26, v33, v120, v124], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn13) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:161:5:dot', stdlib.UInt_max, 12), v24, v26, v33, v120]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:161:5:dot', stdlib.UInt_max, 12), v24, v26, v33]);
    const [v126] = txn13.data;
    const v129 = txn13.time;
    const v125 = txn13.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v128 = stdlib.addressEq(v24, v125);
    stdlib.assert(v128, {
      at: './index.rsh:161:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'IBO'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, 13), v24, v26, v33, v129]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, 13), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, 1)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v126] = txn13.data;
  const v129 = txn13.time;
  const v125 = txn13.from;
  ;
  const v128 = stdlib.addressEq(v24, v125);
  stdlib.assert(v128, {
    at: './index.rsh:161:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  const txn14 = await (ctc.recv(14, 1, [ctc2], false, false));
  const [v135] = txn14.data;
  const v138 = txn14.time;
  const v134 = txn14.from;
  ;
  const v137 = stdlib.addressEq(v33, v134);
  stdlib.assert(v137, {
    at: './index.rsh:169:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'IBO'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Supplier(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Supplier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Supplier expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc4, ctc4]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc2], false, false));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 0, [], false, false));
  const [] = txn3.data;
  const v41 = txn3.time;
  const v37 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v33, v37);
  stdlib.assert(v40, {
    at: './index.rsh:60:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn4 = await (ctc.recv(4, 1, [ctc2], false, false));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:70:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const v54 = stdlib.protect(ctc2, await interact.ackCADreceived(v25), {
    at: './index.rsh:78:52:application',
    fs: ['at ./index.rsh:77:7:application call to [unknown function] (defined at: ./index.rsh:77:11:function exp)'],
    msg: 'ackCADreceived',
    who: 'Supplier'
    });
  
  const txn5 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, 3), [ctc4, ctc1, ctc4, ctc1, ctc2], [v24, v26, v33, v50, v54], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn5) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, 4), v24, v26, v33, v50]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, 4), v24, v26, v33]);
    const [v56] = txn5.data;
    const v58 = txn5.time;
    const v55 = txn5.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:9:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v26, v33, v55, v58]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:83:9:after expr stmt semicolon', stdlib.UInt_max, 5), v24, v26, v33, v55]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:83:9:after expr stmt semicolon', stdlib.UInt_max, 9)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v56] = txn5.data;
  const v58 = txn5.time;
  const v55 = txn5.from;
  ;
  const v62 = stdlib.protect(ctc2, await interact.shippedProduct('IBO                                                             ', 'product delivery                                                '), {
    at: './index.rsh:87:60:application',
    fs: ['at ./index.rsh:86:7:application call to [unknown function] (defined at: ./index.rsh:86:11:function exp)'],
    msg: 'shippedProduct',
    who: 'Supplier'
    });
  
  const txn6 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 4), [ctc4, ctc1, ctc4, ctc4, ctc1, ctc2], [v24, v26, v33, v55, v58, v62], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, false, (async (txn6) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 5), v24, v26, v33, v55, v58]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, 5), v24, v26, v33, v55]);
    const [v64] = txn6.data;
    const v67 = txn6.time;
    const v63 = txn6.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v66 = stdlib.addressEq(v55, v63);
    stdlib.assert(v66, {
      at: './index.rsh:89:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Supplier'
      });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:92:9:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v26, v33, v67]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:92:9:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v26, v33]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:92:9:after expr stmt semicolon', stdlib.UInt_max, 8)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v64] = txn6.data;
  const v67 = txn6.time;
  const v63 = txn6.from;
  ;
  const v66 = stdlib.addressEq(v55, v63);
  stdlib.assert(v66, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn7 = await (ctc.recv(7, 1, [ctc2], false, false));
  const [v73] = txn7.data;
  const v76 = txn7.time;
  const v72 = txn7.from;
  ;
  const v75 = stdlib.addressEq(v24, v72);
  stdlib.assert(v75, {
    at: './index.rsh:100:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn8 = await (ctc.recv(8, 1, [ctc2], false, false));
  const [v82] = txn8.data;
  const v85 = txn8.time;
  const v81 = txn8.from;
  ;
  const v84 = stdlib.addressEq(v24, v81);
  stdlib.assert(v84, {
    at: './index.rsh:110:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn9 = await (ctc.recv(9, 1, [ctc2], false, false));
  const [v91] = txn9.data;
  const v93 = txn9.time;
  const v90 = txn9.from;
  ;
  const txn10 = await (ctc.recv(10, 1, [ctc2], false, false));
  const [v99] = txn10.data;
  const v102 = txn10.time;
  const v98 = txn10.from;
  ;
  const v101 = stdlib.addressEq(v90, v98);
  stdlib.assert(v101, {
    at: './index.rsh:129:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn11 = await (ctc.recv(11, 1, [ctc2], false, false));
  const [v108] = txn11.data;
  const v111 = txn11.time;
  const v107 = txn11.from;
  ;
  const v110 = stdlib.addressEq(v90, v107);
  stdlib.assert(v110, {
    at: './index.rsh:140:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn12 = await (ctc.recv(12, 1, [ctc2], false, false));
  const [v117] = txn12.data;
  const v120 = txn12.time;
  const v116 = txn12.from;
  ;
  const v119 = stdlib.addressEq(v24, v116);
  stdlib.assert(v119, {
    at: './index.rsh:151:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn13 = await (ctc.recv(13, 1, [ctc2], false, false));
  const [v126] = txn13.data;
  const v129 = txn13.time;
  const v125 = txn13.from;
  ;
  const v128 = stdlib.addressEq(v24, v125);
  stdlib.assert(v128, {
    at: './index.rsh:161:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  const txn14 = await (ctc.recv(14, 1, [ctc2], false, false));
  const [v135] = txn14.data;
  const v138 = txn14.time;
  const v134 = txn14.from;
  ;
  const v137 = stdlib.addressEq(v33, v134);
  stdlib.assert(v137, {
    at: './index.rsh:169:6:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Supplier'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
gtxn 2 Sender
byte "{{m14}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(djA=)
gtxna 0 ApplicationArgs 2
substring 0 8
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(djA=)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 295
    }, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 359
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 359
    }, {
    count: 9,
    size: 359
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 327
    }, {
    count: 9,
    size: 327
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 64
store 255
dup
substring 64 72
btoi
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:46:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 13
itob
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 254
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 253
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:56:4:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 12
itob
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:60:4:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:60:4:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// check view bs
int 11
itob
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:70:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:70:5:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 10
itob
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:80:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 9
itob
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 251
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:89:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:89:5:dot"
// "[]"
load 252
gtxn 0 Sender
==
assert
// check view bs
int 8
itob
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:100:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:100:5:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 7
itob
load 1
==
assert
// compute state in HM_Set 7
int 7
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:110:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:110:5:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 6
itob
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:119:8:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
load 1
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 254
itob
concat
load 253
concat
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 251
pop
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 9
int 9
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:129:6:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:129:6:dot"
// "[]"
load 252
gtxn 0 Sender
==
assert
// check view bs
int 4
itob
load 1
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 251
pop
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:140:6:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:140:6:dot"
// "[]"
load 252
gtxn 0 Sender
==
assert
// check view bs
int 3
itob
load 1
==
assert
// compute state in HM_Set 11
int 11
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 11
int 11
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:151:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:151:5:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 2
itob
load 1
==
assert
// compute state in HM_Set 12
int 12
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:161:5:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:161:5:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 1
itob
load 1
==
assert
// compute state in HM_Set 13
int 13
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 252
pop
// Handler 14
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 13
int 13
itob
load 255
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:169:6:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:169:6:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64(AAAAAAAAAAA=)
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 1,
  viewSize: 8
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v25",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v90",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v99",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v90",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v108",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v117",
                "type": "bool"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T34",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v126",
                "type": "bool"
              }
            ],
            "internalType": "struct T38",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T39",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v135",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v34",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v47",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v56",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v55",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v64",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v91",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "Main_status",
    "outputs": [
      {
        "internalType": "uint8[64]",
        "name": "",
        "type": "uint8[64]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Main_step",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v25",
                "type": "uint8[64]"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v90",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v93",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v99",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v90",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v108",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v117",
                "type": "bool"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T34",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v126",
                "type": "bool"
              }
            ],
            "internalType": "struct T38",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T39",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v135",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v34",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v41",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v47",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v56",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v55",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v64",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v82",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v91",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b600181811c908216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b61479f80620001a76000396000f3fe6080604052600436106100f75760003560e01c80637fe513f81161008a578063bfb10bab11610059578063bfb10bab146101fe578063c1d8233914610211578063c92d5d9914610224578063f630319f1461023757600080fd5b80637fe513f8146101b257806391fd27aa146101c55780639994055b146101d8578063b91ac4e1146101eb57600080fd5b8063410a1137116100c6578063410a113714610166578063433c4c851461017957806360b7e6941461018c57806363b23c551461019f57600080fd5b80630f9cae2f1461010357806315e4a53914610118578063178f0737146101405780631917fe631461015357600080fd5b366100fe57005b600080fd5b6101166101113660046143fc565b610259565b005b34801561012457600080fd5b5061012d6103d5565b6040519081526020015b60405180910390f35b61011661014e3660046143fc565b610d09565b6101166101613660046143fc565b610e50565b610116610174366004614434565b610fac565b6101166101873660046143fc565b6110e2565b61011661019a366004614418565b61123e565b6101166101ad3660046143fc565b6113c0565b6101166101c03660046143fc565b61151c565b6101166101d3366004614418565b611677565b6101166101e6366004614447565b6117d6565b6101166101f93660046143fc565b6118f6565b61011661020c3660046143fc565b611a00565b61011661021f3660046143fc565b611b47565b610116610232366004614418565b611cab565b34801561024357600080fd5b5061024c611e0a565b604051610137919061455b565b6040516102959061027190600390849060200161465e565b6040516020818303038152906040528051906020012060001c600054146012614259565b600080556102a534156010614259565b6102c7336102b660208401846143bd565b6001600160a01b0316146011614259565b7fe7798b82ca60c2f2addebb7a5d0833e6c743068784620ac9414610a1fe464f5c816040516102f69190614590565b60405180910390a1600a60015560408051600060208201819052910160405160208183030381529060405260029080519060200190610336929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290610366908401846143bd565b6001600160a01b031681526020808401359082015261038b60608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b5906004908390602001614672565b60408051601f198184030181529190528051602090910120600055505050565b600060018054141561048a576000600280546103f090614726565b80601f016020809104026020016040519081016040528092919081815260200182805461041c90614726565b80156104695780601f1061043e57610100808354040283529160200191610469565b820191906000526020600020905b81548152906001019060200180831161044c57829003601f168201915b505050505080602001905181019061048191906143df565b50600d92915050565b6002600154141561053e576000600280546104a490614726565b80601f01602080910402602001604051908101604052809291908181526020018280546104d090614726565b801561051d5780601f106104f25761010080835404028352916020019161051d565b820191906000526020600020905b81548152906001019060200180831161050057829003601f168201915b505050505080602001905181019061053591906143df565b50600c92915050565b600360015414156105f25760006002805461055890614726565b80601f016020809104026020016040519081016040528092919081815260200182805461058490614726565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b50505050508060200190518101906105e991906143df565b50600b92915050565b600460015414156106a65760006002805461060c90614726565b80601f016020809104026020016040519081016040528092919081815260200182805461063890614726565b80156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505080602001905181019061069d91906143df565b50600a92915050565b6005600154141561075a576000600280546106c090614726565b80601f01602080910402602001604051908101604052809291908181526020018280546106ec90614726565b80156107395780601f1061070e57610100808354040283529160200191610739565b820191906000526020600020905b81548152906001019060200180831161071c57829003601f168201915b505050505080602001905181019061075191906143df565b50600992915050565b6006600154141561080e5760006002805461077490614726565b80601f01602080910402602001604051908101604052809291908181526020018280546107a090614726565b80156107ed5780601f106107c2576101008083540402835291602001916107ed565b820191906000526020600020905b8154815290600101906020018083116107d057829003601f168201915b505050505080602001905181019061080591906143df565b50600892915050565b600760015414156108c25760006002805461082890614726565b80601f016020809104026020016040519081016040528092919081815260200182805461085490614726565b80156108a15780601f10610876576101008083540402835291602001916108a1565b820191906000526020600020905b81548152906001019060200180831161088457829003601f168201915b50505050508060200190518101906108b991906143df565b50600792915050565b60086001541415610976576000600280546108dc90614726565b80601f016020809104026020016040519081016040528092919081815260200182805461090890614726565b80156109555780601f1061092a57610100808354040283529160200191610955565b820191906000526020600020905b81548152906001019060200180831161093857829003601f168201915b505050505080602001905181019061096d91906143df565b50600692915050565b60096001541415610a2a5760006002805461099090614726565b80601f01602080910402602001604051908101604052809291908181526020018280546109bc90614726565b8015610a095780601f106109de57610100808354040283529160200191610a09565b820191906000526020600020905b8154815290600101906020018083116109ec57829003601f168201915b5050505050806020019051810190610a2191906143df565b50600592915050565b600a6001541415610ade57600060028054610a4490614726565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7090614726565b8015610abd5780601f10610a9257610100808354040283529160200191610abd565b820191906000526020600020905b815481529060010190602001808311610aa057829003601f168201915b5050505050806020019051810190610ad591906143df565b50600492915050565b600b6001541415610b9257600060028054610af890614726565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2490614726565b8015610b715780601f10610b4657610100808354040283529160200191610b71565b820191906000526020600020905b815481529060010190602001808311610b5457829003601f168201915b5050505050806020019051810190610b8991906143df565b50600392915050565b600c6001541415610c4657600060028054610bac90614726565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd890614726565b8015610c255780601f10610bfa57610100808354040283529160200191610c25565b820191906000526020600020905b815481529060010190602001808311610c0857829003601f168201915b5050505050806020019051810190610c3d91906143df565b50600292915050565b600d6001541415610cfa57600060028054610c6090614726565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8c90614726565b8015610cd95780601f10610cae57610100808354040283529160200191610cd9565b820191906000526020600020905b815481529060010190602001808311610cbc57829003601f168201915b5050505050806020019051810190610cf191906143df565b50600192915050565b610d0660006008614259565b90565b604051610d4590610d2190600490849060200161465e565b6040516020818303038152906040528051906020012060001c600054146014614259565b60008055610d5534156013614259565b7f2aac8689337cd18fa5c438dc2f99249e7e721ab2a53cf44466ea788695d459f281604051610d849190614590565b60405180910390a1600960015560408051600060208201819052910160405160208183030381529060405260029080519060200190610dc4929190614282565b506040805160a0810182526000808252602080830182905292820181905260608201819052608082015290610dfb908401846143bd565b6001600160a01b0316815260208084013590820152610e2060608401604085016143bd565b6001600160a01b0316604080830191909152336060830152436080830152516103b59060059083906020016146c6565b604051610e8c90610e6890600b90849060200161465e565b6040516020818303038152906040528051906020012060001c600054146028614259565b60008055610e9c34156026614259565b610ebe33610ead60208401846143bd565b6001600160a01b0316146027614259565b7f353dffa3e9151efd84be19b7d25def5dfff384a49918517ab74764038b618a2481604051610eed9190614590565b60405180910390a1600260015560408051600060208201819052910160405160208183030381529060405260029080519060200190610f2d929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290610f5d908401846143bd565b6001600160a01b0316815260208084013590820152610f8260608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b590600c908390602001614672565b6040805160006020820152823591810191909152610feb906060016040516020818303038152906040528051906020012060001c60005414600a614259565b60008055610ffb34156009614259565b7f216b02dd46973b1185dd4af06050f78bb5d740f8ee2300b13ceeaaf8890039718160405161102a91906145b2565b60405180910390a1600d6001556040805160006020820181905291016040516020818303038152906040526002908051906020019061106a929190614282565b50611098604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3381526108208301356020808301918252436040808501918252805160019381019390935284516001600160a01b031690830152915160608201529051608082015260a0016103b5565b60405161111e906110fa90600790849060200161465e565b6040516020818303038152906040528051906020012060001c60005414601d614259565b6000805561112e3415601b614259565b6111503361113f60208401846143bd565b6001600160a01b031614601c614259565b7fcbfdaac8d36007839ccb925df54e64657d931d37266801eaf1d675ce3645e83e8160405161117f9190614590565b60405180910390a16006600155604080516000602082018190529101604051602081830303815290604052600290805190602001906111bf929190614282565b5060408051608081018252600080825260208083018290529282018190526060820152906111ef908401846143bd565b6001600160a01b031681526020808401359082015261121460608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b5906008908390602001614672565b60405161127a906112569060099084906020016146b2565b6040516020818303038152906040528051906020012060001c600054146022614259565b6000805561128a34156020614259565b6112af3361129e60808401606085016143bd565b6001600160a01b0316146021614259565b7fea4a36a9396e1f19cda8814fda18691a9632f9c800886f897a77cdf76b5eb931816040516112de91906145a4565b60405180910390a160046001556040805160006020820181905291016040516020818303038152906040526002908051906020019061131e929190614282565b506040805160a0810182526000808252602080830182905292820181905260608201819052608082015290611355908401846143bd565b6001600160a01b031681526020808401359082015261137a60608401604085016143bd565b6001600160a01b0316604082015261139860808401606085016143bd565b6001600160a01b031660608201524360808201526040516103b590600a9083906020016146c6565b6040516113fc906113d890600690849060200161465e565b6040516020818303038152906040528051906020012060001c60005414601a614259565b6000805561140c34156018614259565b61142e3361141d60208401846143bd565b6001600160a01b0316146019614259565b7feabff375a5b14ed0e870522afc960fb22d35e187ef800686e8441167ba96d8c38160405161145d9190614590565b60405180910390a160076001556040805160006020820181905291016040516020818303038152906040526002908051906020019061149d929190614282565b5060408051608081018252600080825260208083018290529282018190526060820152906114cd908401846143bd565b6001600160a01b03168152602080840135908201526114f260608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b5906007908390602001614672565b6040516115589061153490600c90849060200161465e565b6040516020818303038152906040528051906020012060001c60005414602b614259565b6000805561156834156029614259565b61158a3361157960208401846143bd565b6001600160a01b031614602a614259565b7f4a01bb7fed01659c4bad1c6cb959c48c0818988386349830569f3126a15036bb816040516115b99190614590565b60405180910390a160018055604080516000602082018190529101604051602081830303815290604052600290805190602001906115f8929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290611628908401846143bd565b6001600160a01b031681526020808401359082015261164d60608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b590600d908390602001614672565b6040516116b39061168f90600a9084906020016146b2565b6040516020818303038152906040528051906020012060001c600054146025614259565b600080556116c334156023614259565b6116e8336116d760808401606085016143bd565b6001600160a01b0316146024614259565b7f6de4b0ed995b3721d434e53b497ebe4c733415059714749f6d2be7c59d3ca9b18160405161171791906145a4565b60405180910390a1600360015560408051600060208201819052910160405160208183030381529060405260029080519060200190611757929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290611787908401846143bd565b6001600160a01b03168152602080840135908201526117ac60608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b590600b908390602001614672565b604051611812906117ee906001908490602001614712565b6040516020818303038152906040528051906020012060001c60005414600c614259565b600080556118223415600b614259565b7f70abddf59b6670aa01ef4713a797f64d60939c95f07bab8ed65fdeb4ca0de1d3816040516118519190614608565b60405180910390a1600c60015560408051600060208201819052910160405160208183030381529060405260029080519060200190611891929190614282565b5060408051608081018252600080825260208083018290529282018190526060820152906118c1908401846143bd565b6001600160a01b031681526020808401358183015233604080840191909152436060840152516103b591600291849101614672565b6040516119329061190e90600d90849060200161465e565b6040516020818303038152906040528051906020012060001c60005414602e614259565b600080556119423415602c614259565b6119673361195660608401604085016143bd565b6001600160a01b031614602d614259565b61197460208201826143bd565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f193505050501580156119af573d6000803e3d6000fd5b507f327621da643875cd9fedfe5affde32547a71c3d242ce7b095746cb062c01b220816040516119df9190614590565b60405180910390a1600080805560018190556119fd90600290614306565b33ff5b604051611a3c90611a1890600890849060200161465e565b6040516020818303038152906040528051906020012060001c60005414601f614259565b60008055611a4c3415601e614259565b7f6f522d0c18613d54c2f79a71c7b72fe2bdbcc22512c250ac8571511d9ec0b68681604051611a7b9190614590565b60405180910390a1600560015560408051600060208201819052910160405160208183030381529060405260029080519060200190611abb929190614282565b506040805160a0810182526000808252602080830182905292820181905260608201819052608082015290611af2908401846143bd565b6001600160a01b0316815260208084013590820152611b1760608401604085016143bd565b6001600160a01b0316604080830191909152336060830152436080830152516103b59060099083906020016146c6565b604051611b8390611b5f90600290849060200161465e565b6040516020818303038152906040528051906020012060001c60005414600f614259565b60008055611b9834602083013514600d614259565b611bbd33611bac60608401604085016143bd565b6001600160a01b031614600e614259565b7fbf4aa970276d46255077ef1eb805aea9165d6a1a04bb37b99855f1f39bf029fd81604051611bec9190614633565b60405180910390a1600b60015560408051600060208201819052910160405160208183030381529060405260029080519060200190611c2c929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290611c5c908401846143bd565b6001600160a01b0316815260208084013590820152611c8160608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b5906003908390602001614672565b604051611ce790611cc39060059084906020016146b2565b6040516020818303038152906040528051906020012060001c600054146017614259565b60008055611cf734156015614259565b611d1c33611d0b60808401606085016143bd565b6001600160a01b0316146016614259565b7fc5e661f9698b9265d1eb87b893d8ccff3df33eb94a6869b0ef192fba0e57b3c881604051611d4b91906145a4565b60405180910390a1600860015560408051600060208201819052910160405160208183030381529060405260029080519060200190611d8b929190614282565b506040805160808101825260008082526020808301829052928201819052606082015290611dbb908401846143bd565b6001600160a01b0316815260208084013590820152611de060608401604085016143bd565b6001600160a01b0316604080830191909152436060830152516103b5906006908390602001614672565b611e12614343565b6001805414156120e257600060028054611e2b90614726565b80601f0160208091040260200160405190810160405280929190818152602001828054611e5790614726565b8015611ea45780601f10611e7957610100808354040283529160200191611ea4565b820191906000526020600020905b815481529060010190602001808311611e8757829003601f168201915b5050505050806020019051810190611ebc91906143df565b50506040805161080081018252604981526062602080830191909152606f92820183905260608201819052607360808301819052606860a08401819052606960c0850152607060e08501819052610100850181905260656101208601819052606461014087018190526101608701869052607461018088018190526101a088018590526101c088018390526101e088018790526102008801939093526072610220880181905261024088018990526102608801919091526075610280880181905260636102a089018190526102c089018590526102e08901889052610300890185905261032089018a9052610340890188905261036089018590526103808901959095526103a088018390526103c08801969096526103e0870193909352610400860194909452610420850192909252610440840191909152610460830193909352606d6104808301526104a08201526104c0810191909152602e6104e08201526000610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600260015414156123a7576000600280546120fc90614726565b80601f016020809104026020016040519081016040528092919081815260200182805461212890614726565b80156121755780601f1061214a57610100808354040283529160200191612175565b820191906000526020600020905b81548152906001019060200180831161215857829003601f168201915b505050505080602001905181019061218d91906143df565b50506040805161080081018252604981526042602080830191909152604f9282019290925260608101829052607260808201819052606560a08301819052606360c0840181905260e08401829052606961010085018190526076610120860152610140850183905260646101608601819052610180860187905260746101a0870181905260686101c08801526101e08701859052610200870188905261022087018490526102408701859052610260870186905261028087018190526102a0870183905260666102c08801526102e087019290925261030086019390935261032085018390526103408501959095526070610360850152610380840192909252606f6103a08401526103c083015260756103e0830152610400820152610420810191909152602e6104408201526000610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b60036001541415612672576000600280546123c190614726565b80601f01602080910402602001604051908101604052809291908181526020018280546123ed90614726565b801561243a5780601f1061240f5761010080835404028352916020019161243a565b820191906000526020600020905b81548152906001019060200180831161241d57829003601f168201915b505050505080602001905181019061245291906143df565b5050604080516108008101825260438152606560208083018290526072938301849052607460608401819052606960808501819052606660a086015260c08501819052606360e08601819052606161010087015261012086018390526101408601829052606f6101608701819052606e6101808801526101a0870185905260416101c088015260756101e08801819052610200880185905260686102208901819052610240890183905261026089018a905261028089018590526102a0890186905260796102c08a01526102e0890187905260736103008a01526103208901526103408801939093526070610360880181905261038088018190526103a088019690965260646103c088018190526103e0880186905261040088019690965261042087019790975261044086018790526104608601949094526104808501526104a08401929092526104c083018290526104e0830181905261050083019190915261052082019290925261054081019190915260496105608201526042610580820152604f6105a0820152602e6105c082015260006105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600460015414156129405760006002805461268c90614726565b80601f01602080910402602001604051908101604052809291908181526020018280546126b890614726565b80156127055780601f106126da57610100808354040283529160200191612705565b820191906000526020600020905b8154815290600101906020018083116126e857829003601f168201915b505050505080602001905181019061271d91906143df565b5050604080516108008101825260438152606560208083018290526072938301849052607460608401819052606960808501819052606660a0860181905260c08601829052606360e08701819052606161010088015261012087018490526101408701839052606f6101608801819052606e6101808901526101a0880186905260416101c089015260756101e08901819052610200890186905260686102208a018190526102408a018390526102608a018b90526102808a018690526102a08a0187905260796102c08b018190526102e08b0189905260736103008c018190526103208c018490526103408c018690526103608c018690526103808c018b90526103a08c018190526103c08c01526103e08b018690526104008b01839052606c6104208c018190526104408c01526104608b01526104808a018890526104a08a018490526104c08a018990526104e08a018b90526105008a018790526105208a018690526105408a0194909452610560890194909452610580880187905260646105a089018190526105c089018790526105e0890186905261060089019390935261062088019690965261064087019490945260706106608701526106808601969096526106a08501939093526106c08401949094526106e083019190915261070082015261072081019190915260216107408201526000610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b60056001541415612c0e5760006002805461295a90614726565b80601f016020809104026020016040519081016040528092919081815260200182805461298690614726565b80156129d35780601f106129a8576101008083540402835291602001916129d3565b820191906000526020600020905b8154815290600101906020018083116129b657829003601f168201915b50505050508060200190518101906129eb91906143df565b5050604080516108008101825260438152606560208083018290526072938301849052607460608401819052606960808501819052606660a086015260c08501819052606360e08601819052606161010087015261012086018390526101408601829052606f6101608701819052606e6101808801526101a0870185905260416101c088015260756101e08801819052610200880185905260686102208901819052610240890183905261026089018a905261028089018590526102a0890186905260796102c08a01526102e0890187905261030089018a905261032089018890526103408901849052610360890188905261038089019490945260766103a08901526103c0880187905260646103e089018190526104008901879052610420890186905261044089019490945261046088019690965261048087019490945260706104a08701526104c08601969096526104e0850192909252610500840191909152610520830191909152610540820192909252610560810191909152602e61058082015260006105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b60066001541415612ee557600060028054612c2890614726565b80601f0160208091040260200160405190810160405280929190818152602001828054612c5490614726565b8015612ca15780601f10612c7657610100808354040283529160200191612ca1565b820191906000526020600020905b815481529060010190602001808311612c8457829003601f168201915b5050505050806020019051810190612cb991906143df565b50506040805161080081018252604981526042602080830191909152604f928201929092526060810182905260736080820152606860a08201819052606960c08301819052607060e08401819052610100840181905260656101208501819052606461014086018190526101608601879052607461018087018190526101a087018690526101c087018390526101e0870188905261020087019390935260726102208701819052606f61024088018190526102608801929092526075610280880181905260636102a089018190526102c089018690526102e089018a90526103008901869052610320890184905261034089018a9052610360890186905261038089018890526103a089018590526103c089018a905260436103e08a015261040089019490945261042088018290526104408801859052610460880186905260666104808901526104a088018690526104c088019390935260616104e0880152610500870184905261052087018590526105408701829052606e61056088015261058087019790975260416105a08701526105c08601919091526105e0850182905261060085019390935261062084019290925261064083019390935261066082019290925261068081019190915260796106a0820152602e6106c082015260006106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600760015414156131aa57600060028054612eff90614726565b80601f0160208091040260200160405190810160405280929190818152602001828054612f2b90614726565b8015612f785780601f10612f4d57610100808354040283529160200191612f78565b820191906000526020600020905b815481529060010190602001808311612f5b57829003601f168201915b5050505050806020019051810190612f9091906143df565b50506040805161080081018252604981526042602080830191909152604f9282019290925260608101829052607260808201819052606560a08301819052606360c0840181905260e08401829052606961010085018190526076610120860152610140850183905260646101608601819052610180860187905260666101a08701526101c08601829052606e6101e08701526102008601919091526073610220860152606861024086015261026085019290925261028084018290526102a084019490945260706102c08401526102e0830191909152606f61030083015261032082015260756103408201526103608101919091526074610380820152602e6103a082015260006103c082018190526103e08201819052610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b60086001541415613478576000600280546131c490614726565b80601f01602080910402602001604051908101604052809291908181526020018280546131f090614726565b801561323d5780601f106132125761010080835404028352916020019161323d565b820191906000526020600020905b81548152906001019060200180831161322057829003601f168201915b505050505080602001905181019061325591906143df565b505060408051610800810182526053815260756020808301829052607093830184905260608301849052606c6080840152606960a08401819052606560c08501819052607260e0860181905261010086018490526073610120870181905260686101408801819052610160880185905261018088018990526101a088018990526101c0880184905260646101e08901819052610200890187905260746102208a018190526102408a018390526102608a018690526102808a0188905260666102a08b01526102c08a01879052606e6102e08b01526103008a019690965261032089019290925261034088015261036087019290925261038086018290526103a086018490526103c08601969096526103e0850195909552606f6104008501819052610420850195909552610440840192909252606361046084015261048083018290526104a083018190526104c08301919091526104e082019290925261050081019190915260496105208201526042610540820152604f610560820152602e61058082015260006105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600960015414156137345760006002805461349290614726565b80601f01602080910402602001604051908101604052809291908181526020018280546134be90614726565b801561350b5780601f106134e05761010080835404028352916020019161350b565b820191906000526020600020905b8154815290600101906020018083116134ee57829003601f168201915b505050505080602001905181019061352391906143df565b5050604080516108008101825260538152607560208083019190915260709282018390526060820192909252606c60808201819052606960a08301819052606560c08401819052607260e0850181905261010085018690526101208501526101408401819052606361016085015261018084018190526101a0840182905260766101c08501526101e08401819052606461020085015261022084018590526074610240850152606861026085015261028084018190526102a0840185905260436102c085015260416102e0850152604461030085015261032084019490945260666103408401526103608301526103808201526103a081019190915260736103c0820152602e6103e08201526000610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600a60015414156139fc5760006002805461374e90614726565b80601f016020809104026020016040519081016040528092919081815260200182805461377a90614726565b80156137c75780601f1061379c576101008083540402835291602001916137c7565b820191906000526020600020905b8154815290600101906020018083116137aa57829003601f168201915b50505050508060200190518101906137df91906143df565b50506040805161080081018252604981526042602080830191909152604f9282019290925260608101829052607360808201819052606560a08301819052606e60c0840152607460e084018190526101008401859052604361012085015260416101408501526044610160850152610180840185905260666101a085015260696101c08501819052606c6101e08601819052610200860184905261022086019490945261024085018690526102608501829052606f6102808601526102a085018690526102c085019190915260686102e0850152610300840182905261032084019490945260536103408401526075610360840152607061038084018190526103a08401526103c08301919091526103e08201929092526104008101919091526072610420820152602e6104408201526000610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600b6001541415613cc157600060028054613a1690614726565b80601f0160208091040260200160405190810160405280929190818152602001828054613a4290614726565b8015613a8f5780601f10613a6457610100808354040283529160200191613a8f565b820191906000526020600020905b815481529060010190602001808311613a7257829003601f168201915b5050505050806020019051810190613aa791906143df565b5050604080516108008101825260438152607560208083018290526073938301849052607460608401819052606f60808501819052606d60a0860152606560c08601819052607260e0870181905261010087018590526070610120880152606161014088018190526069610160890152606461018089018190526101a089018790526101c0890186905260686101e08a01526102008901849052610220890187905260356102408a015261026089018790526102808901929092526102a0880183905260716102c08901526102e0880196909652610300870182905261032087018890526103408701939093526103608601526103808501919091526103a08401919091526103c0830191909152606c6103e08301526067610400830152610420820152610440810191909152602e610460820152600061048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600c6001541415613f8357600060028054613cdb90614726565b80601f0160208091040260200160405190810160405280929190818152602001828054613d0790614726565b8015613d545780601f10613d2957610100808354040283529160200191613d54565b820191906000526020600020905b815481529060010190602001808311613d3757829003601f168201915b5050505050806020019051810190613d6c91906143df565b505060408051610800810182526043815260756020808301919091526073928201839052607460608301819052606f6080840152606d60a08401819052606560c08501819052607260e086018190526101008601859052606161012087015260636101408701819052610160870152610180860182905260706101a08701526101c086018490526101e08601829052606461020087015261022086018590526102408601849052606861026087015261028086018290526102a08601949094526102c08501929092526102e0840191909152610300830191909152610320820152610340810191909152602e610360820152600061038082018190526103a082018190526103c082018190526103e08201819052610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b600d600154141561425157600060028054613f9d90614726565b80601f0160208091040260200160405190810160405280929190818152602001828054613fc990614726565b80156140165780601f10613feb57610100808354040283529160200191614016565b820191906000526020600020905b815481529060010190602001808311613ff957829003601f168201915b505050505080602001905181019061402e91906143df565b50506040805161080081018252604981526042602080830191909152604f9282019290925260608101829052607360808201819052606860a08301819052606f60c08401819052607760e0850152606561010085018190526064610120860181905261014086018790526074610160870181905261018087018590526101a087018390526101c0870188905260546101e0880152610200870183905260726102208801819052606d610240890152610260880196909652610280870188905260666102a08801526102c087018490526102e087018690526103008701889052610320870181905261034087019490945261036086019190915261038085019590955260706103a08501526103c08401929092526103e083019190915261040082019290925260756104208201526063610440820152610460810191909152602e61048082015260006104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c082018190526105e08201819052610600820181905261062082018190526106408201819052610660820181905261068082018190526106a082018190526106c082018190526106e08201819052610700820181905261072082018190526107408201819052610760820181905261078082018190526107a082018190526107c082018190526107e0820152919050565b610d06600060075b8161427e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461428e90614726565b90600052602060002090601f0160209004810192826142b057600085556142f6565b82601f106142c957805160ff19168380011785556142f6565b828001600101855582156142f6579182015b828111156142f65782518255916020019190600101906142db565b50614302929150614362565b5090565b50805461431290614726565b6000825580601f10614322575050565b601f0160209004906000526020600020908101906143409190614362565b50565b6040518061080001604052806040906020820280368337509192915050565b5b808211156143025760008155600101614363565b80356001600160a01b038116811461438e57600080fd5b919050565b600060a082840312156143a557600080fd5b50919050565b600060c082840312156143a557600080fd5b6000602082840312156143cf57600080fd5b6143d882614377565b9392505050565b6000602082840312156143f157600080fd5b81516143d88161475b565b600060a0828403121561440e57600080fd5b6143d88383614393565b600060c0828403121561442a57600080fd5b6143d883836143ab565b600061084082840312156143a557600080fd5b6000608082840312156143a557600080fd5b6001600160a01b038061446b83614377565b168352602082013560208401528061448560408401614377565b16604084015250606090810135910152565b6144a18282614459565b60808101356144af8161475b565b8015156080840152505050565b6001600160a01b03806144ce83614377565b16835260208201356020840152806144e860408401614377565b166040840152806144fb60608401614377565b16606084015250608090810135910152565b61451782826144bc565b60a08101356145258161475b565b80151560a0840152505050565b6001600160a01b0361454382614377565b16825260208181013590830152604090810135910152565b6108008101818360005b604081101561458757815160ff16835260209283019290910190600101614565565b50505092915050565b60a0810161459e8284614497565b92915050565b60c0810161459e828461450d565b81358152610840810160208083018185016000805b60408110156145f457823560ff81168082146145e1578384fd5b85525092840192918401916001016145c7565b505050505061082092830135919092015290565b608081016146168284614532565b60608301356146248161475b565b80151560608401525092915050565b60a081016146418284614459565b608083013561464f8161475b565b80151560808401525092915050565b82815260a081016143d86020830184614459565b82815260a081016143d8602083018480516001600160a01b0390811683526020808301519084015260408083015190911690830152606090810151910152565b82815260c081016143d860208301846144bc565b82815260c081016143d8602083018480516001600160a01b0390811683526020808301519084015260408083015182169084015260608083015190911690830152608090810151910152565b828152608081016143d86020830184614532565b600181811c9082168061473a57607f821691505b602082108114156143a557634e487b7160e01b600052602260045260246000fd5b801515811461434057600080fdfea264697066735822122064a464b110e97e82970817a41b43f79401641490956fb81d4044d10fbe91f1c264736f6c63430008050033`,
  BytecodeLen: 18758,
  Which: `oD`,
  deployMode: `DM_constructor`,
  views: {
    Main: {
      status: `Main_status`,
      step: `Main_step`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

