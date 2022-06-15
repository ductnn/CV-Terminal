var answers = {

	skills:
	`
		<br>
		
		<strong style="font-size: 18px;">TECHNICAL SKILLS</strong>

		<br><br>
		
		<li class="bullet"><strong>LANGUAGES</strong>
			<br>
			<ul>
				Python | Golang | Javascript | Typescript |<br>
				C | C++ | Bash | Nodejs | Django |
			</ul>
		</li>

		<li class="bullet"><strong>TOOLS</strong>
			<br>
			<ul>
				Docker | Kubernetes | Jenkins | Ansible |<br>
				Terraform | PLG Stack | ELK/EFK Stack | Github | Gitlab |
			</ul>
		</li>

		<br>
	`,

	experiences:
	`
		<br>

		<strong style="font-size: 18px;">EXPERIENCE</strong>

		<br><br>

		<li class="bullet">
			<strong style="font-size: 15px;">MoonLab</strong><br>
			<ul>
				- DevOps | Cloud Engineer<br>
				- Working on projects using AWS, EKS, Docker, NodeJS, Golang, Java, Terraform, CICD etc.<br>
				- November 2021 to Present
			</ul>
		</li>

		<li class="bullet" style="padding-top: 10px">
			<strong style="font-size: 15px;">VMO Group</strong><br>
			<ul>
				- DevOps | Cloud Engineer<br>
				- Working on projects using AWS, EKS, Docker, NodeJS, Terraform, CICD etc.<br>
				- September 2021 to December 2021
			</ul>
		</li>

		<li class="bullet" style="padding-top: 10px">
			<strong style="font-size: 15px;">FPT Corporation</strong><br>
			<ul>
				- Cloud Engineer<br>
				- Working on projects using Openstack, Kubernetes, Docker, Python, CICD etc.<br>
				- April 2021 to July 2021
			</ul>
		</li>

		<li class="bullet" style="padding-top: 10px">
			<strong style="font-size: 15px;">Viettel Networks</strong><br>
			<ul>
				- Software | Cloud Engineer<br>
				- Working on projects using Openstack, Kubernetes, Docker, Ansible, Netbox, Django, Python, CICD etc.<br>
				- July 2020 to February 2021
			</ul>
		</li>

		<br>
	`,

	edu:
	`
		<br>

		<strong style="font-size: 18px;">EDUCATION</strong>

		<br><br>

		<li class="bullet">
			<strong style="font-size: 15px;">B.S. in Electronics and Telecommunications</strong><br>
			<ul>
				- College: Posts and Telecommunications Institute of Technology<br>
				- Research about Wireless Sensor Network.<br>
			</ul>
		</li>

		<li class="bullet" style="padding-top: 10px">
			<strong style="font-size: 15px;">CCNA</strong><br>
			<ul>
				- Academy: VNNET<br>
				- Cisco CCNA Routing and Switching course<br>
				- Score: 950/1000
			</ul>
		</li>

		<br>
	`,

	projects:
	`
		<br>

		<strong style="font-size: 18px;">PROJECTS</strong>

		<br><br>

		<h3>Updating ...</h3>

		<br>
	`,

	ls: `Try ls skills, ls experiences, ls projects, ls edu, ls resume`,

	echo: ``,

	gender: 'male',

	dob: '05-03-1998',

	age: calculateAge(),

	'home town': "Hanoi",

	home_town: "Hanoi"

};

function calculateAge() {
	// age calc
	var d1 = new Date("1998-03-05");
	var d2 = new Date();
	var diff = d2.getTime() - d1.getTime();
	var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

	return age;
}
