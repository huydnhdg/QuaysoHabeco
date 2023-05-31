using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Excel = Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using TCLrandom.Models;
using Microsoft.AspNet.Identity.Owin;
using System.Data.Entity;
using PagedList;
using System.Data;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.UI;
using System.Data.Entity.Validation;
using System.Data.OleDb;
using LinqToExcel;
using System.Text;
using System.Xml;
using System.Configuration;
using System.Data.SqlClient;
using ExcelDataReader;
using OfficeOpenXml;
using NLog;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Information;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;

namespace TCLrandom.Controllers
{
    public class HomeController : Controller
    {
        Logger logger = LogManager.GetCurrentClassLogger();
        private HN_KorenoEntities1 db = new HN_KorenoEntities1();
        public ActionResult Index()
        {

            return View();
        }

        [Route]
        public ActionResult WinnerList()
        {

            var model = db.DS_QuayThuong.Where(g => g.Status != null).OrderBy(o => o.Status).ToList();
            var ds1 = db.DS_QuayThuong.Where(g => g.Status == 0).OrderByDescending(o => o.Time).ToList();
            List<DS_QuayThuong> newslist1 = ds1.ToList();
            ViewBag.newslist1 = newslist1;
            var ds2 = db.DS_QuayThuong.Where(g => g.Status == 1).OrderByDescending(o => o.Time).ToList();
            List<DS_QuayThuong> newslist2 = ds2.ToList();
            ViewBag.newslist2 = newslist2;
            bool danhsach = false;
            if (model.Count > 0)
            {
                danhsach = true;
            }
            return danhsach ? View(model) : View("WinnerList");
        }

        [HttpPost]
        public JsonResult Quayso(string giaithuong)
        {
            string codearray = "";
            string phonearray = "";

            int count_0 = db.DS_QuayThuong.Where(s => s.Status == 0).Count();//01
            int count_1 = db.DS_QuayThuong.Where(s => s.Status == 1).Count();//02
            int count = db.DS_QuayThuong.Where(s => s.Status == 0 || s.Status == 1).Count();
            if (count_0 >= 5)
            {
                giaithuong = "1";

            }
            else
            {
                giaithuong = "0";
            }
            var giai = int.Parse(giaithuong);
            if (giai == 0 && count_0 < 5 && count_1 == 0)
            {
                count++;
                var tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
                var check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
                while (check.Count() > 0)
                {
                    tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
                    check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
                }
                tv.Status = giai;
                string p = tv.Phone.Remove(tv.Phone.Length - 3);

                tv.PhoneXXX = p + "XXX";
                tv.Time = DateTime.Now.ToString();
                db.Entry(tv).State = EntityState.Modified;
                db.SaveChanges();

                codearray = tv.Code;
                phonearray = tv.Phone;
                return Json(new
                {
                    success = true,
                    count,
                    tv.Status,
                    tv,
                    codearray,
                    phonearray,
                    message = 0
                }, JsonRequestBehavior.AllowGet);
            }
            else if (count_0 >= 5 && giai == 1 && count_1 < 5)
            {
                count++;
                var tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
                var check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
                while (check.Count() > 0)
                {
                    tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
                    check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
                }
                tv.Status = giai;
                string p = tv.Phone.Remove(tv.Phone.Length - 3);
                tv.PhoneXXX = p + "XXX";
                tv.Time = DateTime.Now.ToString();
                db.Entry(tv).State = EntityState.Modified;
                db.SaveChanges();

                codearray = tv.Code;
                phonearray = tv.Phone;
                return Json(new
                {
                    success = true,
                    count,
                    tv.Status,
                    tv,
                    codearray,
                    phonearray,
                    message = 0
                }, JsonRequestBehavior.AllowGet);
            }
            //else if (giai == 2 && count_2 < 12)
            //{
            //    var tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
            //    var check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
            //    while (check.Count() > 0)
            //    {
            //        tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
            //        check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
            //    }
            //    tv.Status = giai;
            //    string p = tv.Phone.Remove(tv.Phone.Length - 3);
            //    tv.PhoneXXX = p + "XXX";
            //    tv.Time = DateTime.Now.ToString();
            //    db.Entry(tv).State = EntityState.Modified;
            //    db.SaveChanges();

            //    codearray = tv.Code;
            //    return Json(new
            //    {
            //        success = true,
            //        tv,
            //        codearray,
            //        message = 0
            //    }, JsonRequestBehavior.AllowGet);
            //}
            //else if (giai == 3 && count_3 < 30)
            //{
            //    var tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
            //    var check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
            //    while (check.Count() > 0)
            //    {
            //        tv = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(1).FirstOrDefault();
            //        check = db.DS_QuayThuong.Where(s => s.Status != null && s.Phone == tv.Phone);
            //    }
            //    tv.Status = giai;
            //    string p = tv.Phone.Remove(tv.Phone.Length - 3);
            //    tv.PhoneXXX = p + "XXX";
            //    tv.Time = DateTime.Now.ToString();
            //    db.Entry(tv).State = EntityState.Modified;
            //    db.SaveChanges();

            //    codearray = tv.Code;
            //    return Json(new
            //    {
            //        success = true,
            //        tv,
            //        codearray,
            //        message = 0
            //    }, JsonRequestBehavior.AllowGet);
            //}
            //else if (giai == 4 && count_4 < 100)
            //{
            //    var dskk = db.DS_QuayThuong.Where(s => s.Status == null).OrderBy(q => Guid.NewGuid()).Take(100).ToList();//lay danh sach giai khuyen khich 2000 giai 1 lan
            //                                                                                                             //truyen giai kk cho thue bao
            //    dskk.ForEach(a => a.Status = giai);
            //    dskk.ForEach(a => a.PhoneXXX = a.Phone.Remove(a.Phone.Length - 3) + "XXX");
            //    dskk.ForEach(a => a.Time = DateTime.Now.ToString());
            //    db.SaveChanges();
            //    return Json(new
            //    {
            //        success = true,
            //        dskk,
            //        message = 0
            //    }, JsonRequestBehavior.AllowGet);
            //}
            else
            {
                return Json(new
                {
                    success = true,
                    tv = 0,
                    codearray,
                    message = 0
                }, JsonRequestBehavior.AllowGet);
            }
        }
        [Authorize(Users = "thaihq@bluesea.vn")]
        [HttpPost]
        public JsonResult Reset()
        {
            var giaithuong = db.DS_QuayThuong.Where(s => s.Active != null || s.Status != null).ToList();
            giaithuong.ForEach(a => a.Status = null);
            giaithuong.ForEach(a => a.PhoneXXX = null);
            giaithuong.ForEach(a => a.Time = null);
            giaithuong.ForEach(a => a.Active = null);
            giaithuong.ForEach(a => a.Type = null);
            db.SaveChanges();
            return Json(new
            {
                success = true,
                message = "Đã Reset tất cả giải thưởng đã quay trước đó !."
            }, JsonRequestBehavior.AllowGet);

        }
        public ActionResult ExportToExcel()
        {
            var model = db.DS_QuayThuong.Where(g => g.Status != null).OrderBy(o => o.Status).ToList();
            var gv = new GridView();
            gv.DataSource = model;
            gv.DataBind();
            Response.ClearContent();
            Response.Buffer = true;
            Response.AddHeader("content-disposition", "attachment; filename=DStrungthuong.xls");
            Response.ContentType = "application/ms-excel";
            Response.Charset = "";
            StringWriter objStringWriter = new StringWriter();
            HtmlTextWriter objHtmlTextWriter = new HtmlTextWriter(objStringWriter);
            gv.RenderControl(objHtmlTextWriter);
            Response.Output.Write(objStringWriter.ToString());
            Response.Flush();
            Response.End();
            return View("Index");
        }


        [Route("dang-nhap")]
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [Route("giai-dac-biet")]
        public ActionResult Giai0()
        {
            var giai0 = db.DS_QuayThuong.Where(g => g.Status == 0).OrderBy(g => g.Time).ToList();
            return View(giai0);
        }
        [Route("giai-nhat")]
        public ActionResult Giai1()
        {
            var giai0 = db.DS_QuayThuong.Where(g => g.Status == 1).OrderBy(g => g.Time).ToList();
            return View(giai0);
        }
        [Route("giai-nhi")]
        public ActionResult Giai2()
        {
            var giai1 = db.DS_QuayThuong.Where(g => g.Status == 2).OrderBy(g => g.Time).ToList();
            return View(giai1);
        }
        [Route("giai-ba")]
        public ActionResult Giai3()
        {
            var giai2 = db.DS_QuayThuong.Where(g => g.Status == 3).OrderBy(g => g.Time).ToList();
            return View(giai2);
        }
        [Route("giai-may-man")]
        public ActionResult Giai4(int Id = 0, int StartPage = 0)
        {
            var giai3 = db.DS_QuayThuong.Where(g => g.Status == 4).OrderBy(o => o.Status).ToList();
            return View(giai3);
        }

        [Route("upload")]
        public ActionResult UploadExcel(FormCollection formCollection)
        {
            List<DS_QuayThuong> ds = new List<DS_QuayThuong>();

            if (Request != null)
            {
                try
                {
                    var tableDS = db.DS_QuayThuong.ToList();
                    db.DS_QuayThuong.RemoveRange(tableDS);
                    HttpPostedFileBase file = Request.Files["UploadedFile"];
                    if ((file != null) && (file.ContentLength > 0) && !string.IsNullOrEmpty(file.FileName))
                    {
                        string fileName = file.FileName;
                        string fileContentType = file.ContentType;
                        byte[] fileBytes = new byte[file.ContentLength];
                        var data = file.InputStream.Read(fileBytes, 0, Convert.ToInt32(file.ContentLength));
                        var usersList = new List<DS_QuayThuong>();
                        using (var package = new ExcelPackage(file.InputStream))
                        {
                            var currentSheet = package.Workbook.Worksheets;
                            var workSheet = currentSheet.First();
                            var noOfCol = workSheet.Dimension.End.Column;
                            var noOfRow = workSheet.Dimension.End.Row;

                            for (int rowIterator = 2; rowIterator <= noOfRow; rowIterator++)
                            {
                                var user = new DS_QuayThuong();
                                user.Phone = workSheet.Cells[rowIterator, 1].Value.ToString();
                                user.Code = workSheet.Cells[rowIterator, 2].Value.ToString();
                                //user.Type = workSheet.Cells[rowIterator, 3].Value.ToString();
                                usersList.Add(user);
                            }
                            db.DS_QuayThuong.AddRange(usersList);
                            db.SaveChanges();
                        }
                        ViewBag.text = "Đã save thành công vào Database.";
                       
                    }
                }
                catch (Exception ex)
                {
                    ViewBag.text = ex.Message;
                }
          
            }
            return View(ds);
        }
    }


}