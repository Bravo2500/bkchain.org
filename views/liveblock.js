function anonymous(it) {
var out='      <tr>\r\n\t\t<td class="text-center"><a href=\''+(it.script_name)+'/block/'+( it.block.hash )+'\'>'+( it.block.height )+'</a></td>\r\n'; if (it.proofofstake !== undefined) { out+='\r\n        <td class="text-center">'+( it.block.type )+'</td>\r\n'; } out+='\r\n\t\t<td class="text-center"><abbr class="timeago" rel="tooltip" data-animation="false" title="'+( it.block.time )+'Z">'+( it.block.time )+' UTC</abbr></td>\r\n\t\t<td class="text-center">'+( it.block.size )+'</td>\r\n\t\t<td class="text-center">'+( it.block.txcount )+'</td>\r\n\t\t<td class="text-right">'+( (it.block.out / it.coin_factor).toFixed(2) )+'</td>\r\n        <td class="text-right">'+( (it.block.coinage_destroyed / it.coin_factor).toFixed(2) )+'</td>\r\n'; if (it.proofofstake !== undefined) { out+='\r\n'; if (it.block.type == 'pos') { out+='\r\n        <td class="text-right">'+( (it.block.stake_amount / it.coin_factor).toFixed(2) )+'</td>\r\n'; } else { out+='\r\n        <td class="text-right">N/A</td>\r\n'; } out+='\r\n'; } out+='\r\n\t\t<td class="text-right">'+( (it.block.reward / it.coin_factor).toFixed(2) )+'</td>\r\n      </tr>';return out;
}