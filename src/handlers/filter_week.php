<?php 

require "../libs/db.php";

$alldata = R::findAll('statistics', 'club = ?', array($_POST['club']));
$bigarray = array();
for ($i = 7; $i>=0; $i--){
	$sumSpent = 0;
	$sumCpf = 0;
	$sumSubs = 0;
	$sumCpccount = 0;
	$sumCpc = 0;
	$sumRk = 0;
	$sumCtr = 0;
	$datelabel = date("d.m.Y", mktime(0, 1, date('s'), date('m'), date('d') - $i, date('Y')));
	foreach ($alldata as $key) {
		$datekey = date('d.m.Y', strtotime($key->updatedate));
		if ($datekey == $datelabel) {
			$sumSpent = $sumSpent + $key->spent;
			$sumCpf = $sumCpf + $key->cpf;
			$sumSubs = $sumSubs + $key->subs;
			$sumCpccount = $sumCpccount + $key->cpccount;
			$sumCpc = $sumCpc + $key->cpc;
			$sumRk = $sumRk + $key->activeads;
			$sumCtr = $sumCtr + $key->ctr;
		}
	}
	$darray = array(
		'spent' => $sumSpent,
		'cpf' => $sumCpf,
		'subs' => $sumSubs,
		'cpccount' => $sumCpccount,
		'cpc' => $sumCpc,
		'rk' => $sumRk,
		'ctr' => $sumCtr,
	);
	$array = array(
		'label' => date('d.m', strtotime($datelabel)),
		'data' => $darray,
	);
	$stack = array($array);
	$bigarray = array_merge($bigarray, $stack);
}
echo json_encode($bigarray);
?>