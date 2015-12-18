import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount(){

	}

	render() {
		return (
			<div>
				<div id="abst-render" className="content-box">
					<table className="patent-info highlighter">
						<tbody>
						<tr>
							<th>Title</th>
							<td colSpan="3">
								<div className="lang ">Compositions and methods for treating cancer</div>
							</td>
							<td className="translate-container no-bottom-td" >
								<div className="translate-TITLE"></div>
							</td>
						</tr>
						<tr>
							<th>Publication Number</th>
							<td>CN103442768A</td>
							<th>Publication Date</th>
							<td className="CN103442768A_PBD" id="view-table-pbdt">11 Dec 2013</td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Application Number</th>
							<td className="">CN201280013888.1</td>
							<th>Application Date</th>
							<td className="" id="view-table-apd">18 Jan 2012</td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Standardized Assignee</th>
							<td colSpan="3" id="view-table-docdb_an"><p> 宾夕法尼亚大学董事会 </p></td>
							<td className="translate-container translate-AN_ST no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Assignee Name</th>
							<td colSpan="3" id="view-table-an">
								<div className="lang"><p><a className="name-link related" id="AN0"
														href="/patent/result?q=AN_FACET:&quot;%E5%AE%BE%E5%A4%95%E6%B3%95%E5%B0%BC%E4%BA%9A%E5%A4%A7%E5%AD%A6%E8%91%A3%E4%BA%8B%E4%BC%9A&quot;"
														rel="AN_FACET:&quot;%E5%AE%BE%E5%A4%95%E6%B3%95%E5%B0%BC%E4%BA%9A%E5%A4%A7%E5%AD%A6%E8%91%A3%E4%BA%8B%E4%BC%9A&quot;"
														target="_blank">宾夕法尼亚大学董事会</a> <span>美国宾夕法尼亚州</span></p></div>
							</td>
							<td className="translate-container translate-AN no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Standardized Inventor</th>
							<td colSpan="3" id="view-table-docdb_an"><p>COUKOS GEORGE</p>
								<p>POWELL DANIEL J</p></td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Inventor Name</th>
							<td colSpan="3" id="view-table-in">
								<div className="lang "><p><a className="name-link related" id="IN0"
														 href="/patent/result?q=IN_FACET:&quot;D%20J%20%E9%B2%8D%E5%A8%81%E5%B0%94&quot;"
														 rel="IN_FACET:&quot;D%20J%20%E9%B2%8D%E5%A8%81%E5%B0%94&quot;"
														 target="_blank">D J 鲍威尔</a> <span></span></p>
									<p><a className="name-link related" id="IN1"
										  href="/patent/result?q=IN_FACET:&quot;G%20%E8%81%AA%E5%AD%94%E6%96%AF&quot;"
										  rel="IN_FACET:&quot;G%20%E8%81%AA%E5%AD%94%E6%96%AF&quot;" target="_blank">G
										聪孔斯</a> <span></span></p></div>
							</td>
							<td className="translate-container translate-IN no-bottom-td" ></td>
						</tr>
						<tr>
							<th className="th_ipc">International Classification</th>
							<td colSpan="3"><p>IPC(1-7): <a href="/patent/result?q=IPC_FACET:&quot;A61P35%2F00&quot;"
															rel="A61P35/00" data-type="ipc" className="ipc" id="IPC0"
															target="_blank">A61P35/00</a> <a
								href="/patent/result?q=IPC_FACET:&quot;A61K38%2F00&quot;" rel="A61K38/00"
								data-type="ipc" className="ipc" id="IPC1" target="_blank">A61K38/00</a></p>
								<p>IPC(8): <a href="/patent/result?q=IPC_FACET:&quot;A61P35%2F00&quot;" rel="A61P35/00"
											  data-type="ipc" className="ipc" id="IPCR0" target="_blank">A61P35/00</a> <a
									href="/patent/result?q=IPC_FACET:&quot;A61K38%2F00&quot;" rel="A61K38/00"
									data-type="ipc" className="ipc" id="IPCR1" target="_blank">A61K38/00</a></p></td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr>
							<th className="th_cpc">Cooperative Classification</th>
							<td colSpan="3"><a href="/patent/result?q=CPC_FACET:&quot;C07K2318%2F20&quot;"
											   rel="C07K2318/20" data-type="cpc" className="cpc" id="CPC0" target="_blank">C07K2318/20</a>
								<a href="/patent/result?q=CPC_FACET:&quot;A61K2039%2F5156&quot;" rel="A61K2039/5156"
								   data-type="cpc" className="cpc" id="CPC1" target="_blank">A61K2039/5156</a> <a
									href="/patent/result?q=CPC_FACET:&quot;A61K39%2F0011&quot;" rel="A61K39/0011"
									data-type="cpc" className="cpc" id="CPC2" target="_blank">A61K39/0011</a> <a
									href="/patent/result?q=CPC_FACET:&quot;A61K39%2F39558&quot;" rel="A61K39/39558"
									data-type="cpc" className="cpc" id="CPC3" target="_blank">A61K39/39558</a> <a
									href="/patent/result?q=CPC_FACET:&quot;A61K2039%2F5158&quot;" rel="A61K2039/5158"
									data-type="cpc" className="cpc" id="CPC4" target="_blank">A61K2039/5158</a> <a
									href="/patent/result?q=CPC_FACET:&quot;C07K2317%2F622&quot;" rel="C07K2317/622"
									data-type="cpc" className="cpc" id="CPC5" target="_blank">C07K2317/622</a> <a
									href="/patent/result?q=CPC_FACET:&quot;C07K14%2F705&quot;" rel="C07K14/705"
									data-type="cpc" className="cpc" id="CPC6" target="_blank">C07K14/705</a> <a
									href="/patent/result?q=CPC_FACET:&quot;C07K16%2F28&quot;" rel="C07K16/28"
									data-type="cpc" className="cpc" id="CPC7" target="_blank">C07K16/28</a> <a
									href="/patent/result?q=CPC_FACET:&quot;A61K35%2F17&quot;" rel="A61K35/17"
									data-type="cpc" className="cpc" id="CPC8" target="_blank">A61K35/17</a> <a
									href="/patent/result?q=CPC_FACET:&quot;C07K14%2F70517&quot;" rel="C07K14/70517"
									data-type="cpc" className="cpc" id="CPC9" target="_blank">C07K14/70517</a></td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Agency</th>
							<td colSpan="3">
								<div className="lang "><p>北京纪凯知识产权代理有限公司</p></div>
							</td>
							<td className="translate-container translate-ATC no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Attorney Name</th>
							<td colSpan="3">
								<div className="lang "><p>赵蓉民</p>
									<p>张全信</p></div>
							</td>
							<td className="translate-container translate-AT no-bottom-td" ></td>
						</tr>
						<tr>
							<th>Priority Data</th>
							<td className="" colSpan="3"><p>201161433731 18 Jan 2011 US</p>
								<p>2012021738 18 Jan 2012 US</p></td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr className="external-links">
							<th>External link</th>
							<td colSpan="3"><a
								href="http://worldwide.espacenet.com/publicationDetails/biblio?DB=EPODOC&amp;II=0&amp;ND=3&amp;adjacent=true&amp;locale=en_EP&amp;FT=D&amp;CC=CN&amp;NR=103442768A&amp;KC=A"
								target="_blank">Espacenet</a></td>
							<td className="translate-container no-bottom-td" ></td>
						</tr>
						<tr className="abst-tr">
							<td colSpan="4"><span className="ttl">Abstract</span>
								<div><p>The invention provides compositions and methods for treating ovarian
									cancer. Specifically, the invention relates to administering a genetically modified
									T cell having [alpha]-folate receptor (FR[alpha]) binding domain and 4-IBB (CD137)
									costimulatory domain to treat ovarian cancer.</p></div>
							</td>
							<td className="translate-container no-bottom-td" >
								<span className="ttl"></span>
								<div className="translate-ABST"></div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}


export default Overview;