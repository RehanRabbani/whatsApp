
let contacts = [
	{	
		imgURL: "ali.jpg",
		name: "Ali",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0300-1234567",
		envelop: "<i class='far fa-envelope'></i>",
		email: "ALi123@example.com",
		detail:'seen',			
		status: "Hey there! I am using WhatsApp. "
	},

	{	
		imgURL: "ahmed.jpg",
		name: "ahmed",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0313-2239567",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ahmed234@example.com",
		detail:"seen",	
		status: "Stay there to prove everyone wrong. "
	},

	{	
		imgURL: "zeeshan.jpg",
		name: "Zeeshan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0321-5236561",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Zeeshan345@example.com",
		detail:"sent",
		status: "urgent calls only. "
	},

	{	
		imgURL: "ahsan.jpg",
		name: "Ahsan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0345-2224569",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ahsan456@example.com",
		detail:"seen",
		status: "busy "
	},

	{	
		imgURL: "irfan.jpg",
		name: "Irfan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0321-2951489",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Irfan567@example.com",
		detail:"seen",
		status: "sleeping. "
	},

	{	
		imgURL: "arman.jpg",
		name: "Arman",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "033-6534564",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Arman678@example.com",
		detail:"not sent",
		status: "new number. "
	},

	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},

	{	
		imgURL: "ghani.jpg",
		name: "Ghani",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0315-2444560",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ghani987@example.com",
		detail:"seen",		
		status: "battery about to die. "
	}

];

function initialize(){
let heloo=	document.querySelector('#contact-list');

	for(let i=0;i<=contacts.length;i++){
		let icon;
		if(contacts[i].detail==='seen')
		{
			icon='check';
		}
		else if(contacts[i].detail==='sent')
		{
			icon='envelope';
		}
		else{
			icon='';
		}

		heloo.innerHTML+=`
		
		<section class="person-item" onclick="changeValue(${i})">
		
			<div class="person-img" style="background-image:url(${contacts[i].imgURL})"></div>
		
			
			<div class="after-person-img">
					<div class="content-center">
							<h4 class="nam">${contacts[i].name}</h4>
							<div class="msg-container">
									<i class="fas fa-${icon}"></i>
									<p class="msg">${contacts[i].status}</p>
									
							</div>
					</div>
					<p class="time">yesterday</p>
			</div>
		
		</section>
		`

	}
}
function changeValue(i)
{
	document.querySelector('#info-list .person-img').style["background-image"]=`url(${contacts[i].imgURL})`;
	document.querySelector('#info-list #info-name').innerHTML=contacts[i].name;
	document.querySelector('#info-list #number').innerHTML=contacts[i].number;
	document.querySelector('#info-list #mail').innerHTML=contacts[i].email;
}