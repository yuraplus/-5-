		function clubEdit(idClub) {
			var ID = '#'+idClub;
			var inputClubId = '#'+idClub+'clubname';
			var inputClubRkId = '#'+idClub+'rk';
			var inputClubDeleteId = '#'+idClub+'delete';
			var inputClubDeletePicId = '#'+idClub+'deletepic';
			var IDPic = '#'+idClub+'pic';
			$(inputClubId).attr('disabled',false);
			$(inputClubRkId).attr('disabled',false);
			$(inputClubDeleteId).css({
				"border":"2px solid #FA4343",
				"background": "#FA4343"
			});
			$(inputClubDeletePicId).attr('src', 'media/club_user_body/x.svg');
			$(IDPic).css('background-image', 'url("../../media/club_user_body/save.svg")');
			$(ID).attr('data-save', 'unsaved');
			$(inputClubDeleteId).attr('data-delete', 'yes');
		}
		function clubSaved(idClub) {
			var ID = '#'+idClub;
			var inputClubId = '#'+idClub+'clubname';
			var inputClubRkId = '#'+idClub+'rk';
			var inputClubDeleteId = '#'+idClub+'delete';
			var inputClubDeletePicId = '#'+idClub+'deletepic';
			var IDPic = '#'+idClub+'pic';
			$(inputClubId).attr('disabled',true);
			$(inputClubRkId).attr('disabled',true);
			$(inputClubDeleteId).css({
				"border":"2px solid #8E9198",
				"background": "none"
			});
			$(inputClubDeletePicId).attr('src', 'media/club_user_body/x_grey.svg');
			$(IDPic).css('background-image', 'url("../../media/club_user_body/edit.svg")');
			$(ID).attr('data-save', '');
			$(inputClubDeleteId).attr('data-delete', '');
		}
		function clubSave(idClub){
			var inputClubId = '#'+idClub+'clubname';
			var inputClubRkId = '#'+idClub+'rk';
			var newClubName = $(inputClubId).val();
			var newClubRK = $(inputClubRkId).val();
			var ClubId = idClub.replace('club', '');
			$.ajax({
			  url: '../handlers/sendNewClubInfo.php',
			  method: 'post',
			  data: {
			  	  id: ClubId,
			      club: newClubName,
			      rk: newClubRK
			    },
			  async: false,
			  success: function(data){
			    if (data == 'yes') {
			    	clubSaved(idClub);
			    } else {
			    	clubSaved(idClub);
			    }
			  }
			});
		}
		
		
		function browseClubs(){	
		$.ajax({
			url: '../handlers/all_clubs.php',
			method: 'post',
			async: false,
			success: function(json){
				var data = JSON.parse(json);
				var clubbodies = '';
				for (var i = 0; i<data.length; i++) {
					clubbody = '<div class="club_body"><div class="club_body__clubname"><div class="club_body__clubname-edit" id="club'+ data[i].id +'" data-save=""><div class="club_body__clubname-edit_picture" id="club'+ data[i].id +'pic"></div></div><div class="club_body_editbtn_rk_wall"></div><input type="text" class="club_clubname" placeholder="'+ data[i].name +'" id="club'+ data[i].id +'clubname" disabled><div class="club_body_clubname_rk_wall"></div></div><div class="club_body__rk"><h1 class="club_text_top">Номер РК</h1><input type="text" class="club_clubname_grey" placeholder="'+ data[i].rk +'" id="club'+ data[i].id +'rk" disabled><div class="club_body_key_rk_wall"></div></div><div class="club_body__key"><h1 class="club_text_top">Ключ</h1><h1 class="club_text_bot">'+ data[i].key +'</h1><div class="club_body__key__delete-btn" id="club'+ data[i].id +'delete" data-delete=""><img src="media/club_user_body/x_grey.svg" alt="" class="club_body__key__delete-pic" id="club'+ data[i].id +'deletepic"></div></div></div>';
					clubbodies = clubbodies +""+ clubbody;
				}
				$('.wrapper_clubs').html(clubbodies);	
			}
		});
		$('.club_body__clubname-edit').click(function(){
			var id = this.id;
			var dataSave = this.getAttribute('data-save');
			if (dataSave == '') {
				clubEdit(id);
			} else {
				clubSave(id);
			}
		});
		$('.club_body__key__delete-btn').click(function(){
			var idKek = this.id.replace('delete', '');
			var id = idKek.replace('club', '');
			var idKekInput = '#'+idKek + 'clubname';
			var dataDelete = this.getAttribute('data-delete');
			if (dataDelete == 'yes') {
				var clubnameItem = $(idKekInput).attr('placeholder');
				$('.modal_accept_name').html(clubnameItem);
				$('.wrapper_blur').fadeIn();
				$('.modal_accept_body').css("display", "flex").hide().fadeIn();
				$('.modal_accept_btn-no').click(function(){
					$('.modal_accept_body').fadeOut();
					$('.wrapper_blur').fadeOut();
					clubSaved(idKek);
				});
				$('.modal_accept_btn-yes').click(function(){
					$.ajax({
					  url: '../handlers/deleteClub.php',
					  method: 'post',
					  data: {
					  	  id: id
					    },
					  async: false,
					  success: function(data){
						$('.modal_accept_body').fadeOut();
						$('.wrapper_blur').fadeOut();
						browseClubs();
					  }
					});
				});
			}
		});
		}
		browseClubs();