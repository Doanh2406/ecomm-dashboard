import React from "react";
import { Link } from "react-router-dom";
import "./ProductInfor.scss";
import BarChart from "../../Chart/BarChart";
import LineChart from "../../Chart/LineChart";
import PublishIcon from "@material-ui/icons/Publish";

function ProductInfor() {
  return (
    <div className="product-infor">
      <div className="product-infor__container-title">
        <h1 className="product-infor__title">Product</h1>
        <Link to="/newproduct">
          <button className="product-infor__add-button">Create</button>
        </Link>
      </div>
      <div className="product-infor__top">
        <div className="product-infor__top-left">
          <LineChart />
        </div>
        <div className="product-infor__top-right">
          <div className="product-infor__top-in">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYGBIYEhESEhIYERIRERIZGRQZGRgUGBgcIy4lHB4rHxgYJjomKzAxNTU1GiQ7QjszPzA0NTEBDAwMDw8QGBERGjEdGB0xMTE0PzQxNDE/PzQxNDE/MTExMTE/MTExMTE0MTQxMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwj/xAA+EAACAgEDAQUEBggFBQEAAAABAgADEQQSITEFE0FRcSIyYYEGkaGxwfAHFCNCU2KCshUzcpLRk6LS4eJS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD69qtVXUu6yxUTIG5mVFyegyeJo9l9s16iy5FwprsKBS6Gx1GP2uwHKqTkAnqBnoRPnf6edFc2n0tyZNNdli2qMlQzhdjnHh7LLk+LAeM4P6CrQNZqVNBZmoUi7aP2IDZKknoGyvT/APA4xkgPuocEkAjI6jPI9ZOeM1VWqpF2pxta4E2FAFuUi4dwrFiVLCtmTPTIXPElbZeLhWTqe6ZNY1KK478hRpAjMWO7Ase3G49GG72egesWxWztYHadrYIODgHB+PI+uWzx6aTWhjuZk3O7s6I1im0pSA+1XU7MizAbK8HcPdnr4GYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgQdAwwQCPEEZB+UBACSAMnGTjk46Zk4gRZQRgjI8pjaM58eQD489R9g+qTiAiIgIiICIiAkHYAZMnNE27znw6D/AJiC42Men3ZlisfH6/CfFPpf9M9fXrLTReUrruatKtqlHCMVJbIy2WDdCOMePM+v9ja0anTUXAYFlNVmPLeobHyzKOhEgv3cScgREQEREBESFjYECL244Er7xvP7Jxbu13UsStK1i16Ve3Vmkuy5yMd2QOhwM+EUdqW2WWVomnaxNm9Bq7NyhlDKf8nkEMORxA7qW+f1y6cEdpOl1dN6IhsWw1st5s3MhTKYZF5IfIxnoZ2q2yPsgWREQEREBERAREQEREBERAREQNfVvhceJ4+XjOPpanW+xzZmtkoSurnCMjWF2/q3p/s9J1NQMlj5Db+J++c88Hiag+LfThLK9ZfUVIZtRZZWu3LWK7l1KcZbO7HHiCOs+udmdlWHs3R6bvDXZWmgLsuTg0tWz18EZB2svz8ZnWOSRg/+p0uz3wojBPs6+5rtUlqgIj19wwUjejVgnJ8cNuE6cpoOcn44Hyl0yEREBERASu0cSyIHmMJtvpv09jo91rEClrK3Vm3KQR49PiCJxl7I2sxrs1NYVlegpoUSxG53tY2zNjEbVJ43KoDbjyfcPWR06SEDz1lL6jUaR8OopS1rXehq1sYmrCqGb2clCf3sAY8cz1FQ4+cqWsn0mwBAzERAREQEREBERAREQEREBERA1mGVY/zN9+J59kd7goJAyBn1Inoa/cPq39xnO01X7Yn0P2iWCjX9n2g5Qbl+BG4eoP4S3Rae04BUqPEnGfkJ24jRBECgAdBJxEgREQEREDm6ztBqnRBRY+84V1NG0naWI9twRgKT0xLK+0qn9x1f2lX2XQ4LEgHr04Prg4zLNRp9z1NnGx2fGM7s1umPh72flORoOwnrbfZdvONMCcWknumsJb2nbbu3+6uAuPGB1v1+oWd0bFFmQNm4bskbgMfEAn5Ga13benVSwtRgr1K+10OwWWCsM3PC5PX4GZt7OLFzu9++m7p0FYQbfns6/GcnQdm3ttWwbVRNEqk1orHuLxYVO12ycKBngZPA6gB2z2nQArG5NrFgh3rhip2nHoSAfIyOr7Q7t0rFbuzAn2TUoUbgOd7rnr0GTwZztZ2AbGZt4wxvDKTcqlbGUkEI67sbSMHg58PHZ7W7LN+QvdgNU1TM9W+xATndW2RgjyPiFPhyGzpu06rHasOosVnU1lhv9k4JxnpyD6ETfnLHZpDVtuHsaq3UH2feD12Jt9R3gOf5Z1ICIiAiIgIiYJgCZjInK0/b+ksvOlS9GvGc1g+1wMkeoHOOuOZ0WlwXRKFs8/8A2JdIMxEQNev3T/qf+4zWoH7Q/nxE2a/db/W/9xmtV/mH8+Imh0YiJkIiICIiAiIgef1GvuG8BWwNbRWLM17QjXVKy4zu5DMOnjNU9r2IquAp78VWVqzvtqD3007X8ji1ThcDKNxnLH0hpXptGCwcjAwWBBDeuQDn4CadnZFDBwa1xY9dlmEQbyjq4DYHtAsCTnPvN5wKW7RtFdhCq1iXLSdvuNkpllUnJIV87M5JUgGah7dfNeApBahbMLcCDZqGo5LACsgrnadxyGHGAzdkaKrZ3Xdp3f8AD2L3fXPu4x15lZ7Op3Vt3SZQAJ+zr9kA5UDjIweRjHMCjszV2XKrtsC2VrYigsbEDZ4cHrjjkY5yMeM56au1Fcix7EY1U02ugP7TDd7fhAP2eMEDgEqQOGUzuVaStCxStVLnLlUVS555Yge11PXzMxpdDVVnuqkTON2xFTOM4zgc4yfrged0Pad+wWBw6JpNPbYXG1rDvtV2UKAFYheuMeyBgA5HrJR+rpgjYuCoQjaMFRnCn4cnj4mXwEREBERASnUn2G9DLpXcPZMD4L9ByTrtPYWG86lXI8SXJ3fP22n2T6SdrjRaW3VNWzqmzKrgHDMqlifADOSfITxf0a+hDafXG57UahHaylFD96xOdquCNq7c+BOSB0n0RnmhVTYLFR1yAyq4BGGAYAgEeB5myjYwPA9PgfKave8y8e0Mfn1gbMTVOtReGcBvEEgQNdV/EX/cJkSq6N/rb+6ayf5n58xL6CCrEHILMQfA5M1iwFgyfT4+PH1GaHTiRDA9JKZCIiAiIgIiICIiAiQZwJX3/wAPt5gXxK1sB9ZZAREQEREBERATVusJO1f6m64+A+MtufA+RP1TznbWtdT3dZIxzYw94k84z4SwdC5drZmXvAGSePWeX0z2ISQ3XqDyD6ibe9394/LoJRutq2JJAOwfLPxxOzonyAfhONp0zkfyt/aZ1dBwo9IGwR7RHofrmrfqAv7ufnibDtgt/pzORqHgdbRNuQnGMknHlNPUoGsGTwMk+RGOQZqaTt3T1I63WrTsbGbXSsMCoIZcnlTyM+akdZxLfpbXZa1dYV0at9tiWBwwwVBUAc8nk5wADk+BD1ndMvKOR/KxLofr5HyPyl+m1W7hhhhjIP2HPiPjPBafW3Vn9m7AeXVT/SeJ6Ls/tBrRllAsQZGOjj95ceGf+D4QmvTxKqH3KDLZlSIiAiIgJB2wCZOV2jgwNLVWOtdjIm+wIzJXuCb2AyE3HgZPGZ4XtDtCu7UWayu9qHq0VW0lCzK/6xaraa2nqxLYXYOc4IPQz3Wp1CVVvZYwWtEZ3c8KqqMkn5T56Vus7QfXrpF9iirUrpWXF9te50Fx8BeFXcoPhheDzA992ZdZZTXZdX3drIrWV7t3dsRyuZ0kOROfoNZXfWl1Thq3UOjDxB+4+GPhN+ocfOBZERAREQEREDV1J5/p/GcbV0Zdz5sT9c7Or4AbyPPoZqOAePHwPXImoOS2n+EwtY/InXSkj93iQs0hJyABA09MPbA+Df2mdPR9B+fCaaaRlcNxgZ8TnoR5Tc05wBn7jAnefa9ROHd1I+OJ2dTliCv3ETQt0jkk4gc5qd3UAj4gGP1YdPsnUXSnxEvCAdF+4QOG+hGM7ZPs2vbZOtchPh9oka6NgJAyx8ug+A8zA3+zvcx+epH4Tcmro1wv2fV+TNqShERIERKr7NqMxGdqlseeBmBbMTi6btwPxsHXT8rYrpi5yo9ofvDGSuPEc8zbbtOkIr7/AGWRLFwrksrFVXCgZJJZQBjJJ6QLrK8fEfnrPP8Aan0e/WdV3tlrDTtRXVbQuVN2x3cK7jkJ7fKjrjnidQ9t07gMtt7t7C5rsCqEbYytkeywORtPORjGSMyPbFAXdub3mUp3FxtUqoZi1e3eoAKnJAGGXzGQ2aaQAqqoVAAFAAVVA6AAdBNoCca3t+tWKhXIF60swrsIO6g2q1e0HvOMDA55z0xm/V9qotKWqVZXdVUs/dLk594sMqRg8EZyMdYHTic2ztHFdLKqs9rBK1WwNWx2s5O8D3Qqsc48Ok2NDqRagcAjl0ZTglWRijrkdcMpGfhA2oiICIiBFlBBB6HgzX0tYQlR0Gcec2pTX7z+v4QBHJkHljSDzQoaYDETLyMDPeHz+6N5/IEjMwM94fyBM94fh9UjECRbMLMSSwNiocTNZOWHp90VdIr6t8pBbERIEqvr3Iy5xuVlz5ZGMy2IHGo7FClWZ8lRSBtrWtcVvvGQMkknxJ48AMnNJ+j4NYRrdyolddYNaEKtdium8H3vcAPTI6YPM78QOKewxtVQwXC2KdlSIuXsFgZVHC7WUdc5HXJ5mf8ACH3NYLsXMbNzCtdm11rUqqk8YFNZBJPIOcg4nZiByKOxlRkKsdiWV2KmBkFdOaMZ8Rt2n1B8+L10LKgWuzawsexWKK4yzuxBXy9sjgg8dZ0IgcgdklUQLZ7aWvejFAR3jmw2MVBGVbvXGMjHnN3Q6UVIEBJ9p3ZjgFmdi7tgdMsxOPjNqICIiAiIgJTX7zev4CXSlPfb5fcIEjIPJtIPNQUNISbSBgYiIgZmZiZEBJLIySwNmrpCe839P4xV0mV95v6fxkosiIkCIiAiIgImCZHePOBOJgGZgIiICIiAiIgJSvvt8vuEulSe83y+4QJNK3ljSt5qChpCTaQMDEREDMRMwAklkZJYGzT0mV95vRfxmKZlfePoPxmRZERAREQEiTjmSld3SBS7E/8AE4n0m7ZbSVoKqWu1Ftnd00jjccZLN5KBj6x0HI81+lTta2pKKK3ZFs7xrGUlWYJsATI8CXJPoJ8yTVWLWalscVHO6sWOK2z1ygOD9UD9FUM4Vd+N+1d4Gdu7HtYz4ZzNtWyMzwX6LtJs0Xeb2O+x8V7j3dYRiuFXwJIJJ+I8p7qnp84FsREBERAREQEpX32+X3S6VD3z6CBJpW8mx5kHM1BQ0gZJzIkwMRGYgZiYzMwMySyMypgbNMkvvH0H4yNMkvvH0H4yUWRESBERASLLkYkogeI/SJ2C+r0yvWu66lmdEAyzowAdF+PsqceOzHjPki9l6llLrprigzucUWlFx1ywXAn6PZAZDufjA+efos7P1KV22WF0ocjuqmGNzfvXAEZAwAo8+fIGfRq1wIVAPXzk4CIiAiIgIiICUE4f1A/GXzV1Qxhh4cH5xBN25lTvK2tzKy80Js0rLSJMxmBLMbpHMZgT3RukMxmBbuklaUZmQ0DfpaTrOSfQfjNJbOJt6YeznzOZKL4iJAiIgJyO0WzdTWzslbV3udrmos6GraNwIPAZjjPOPITryq6lHGHUMMg4ZQwyOhwYHn6Nbap3ratlO/Q1ksrd5Z3uxe8Uhgqe8HxtOeemZAds2jo1QVaKLjWwsa20vdYhVGL8e4AOG5YT0uweQ6g9B4dDKP1KvebNg37UXJGdoQsRtHgfbbkecDmdo6u5bdStYDKukqcZs2bGLagFgNpyTtX/AGiWaF3/AFhwbGYHT0WBDt2oSXB24GedoJzk/dOsUHPA5GDx1Hl9p+uNo64GcYzjw8oE4iICIiAiIgJFlyMGSiByNTWUPPu+DfgZV3k7RGZpXdm1tyMqf5TgfUeJdGjvjfLz2QfC0/NQfuxInsh/4v8A2f8A1Lop7yN8k/Y9v7ty/Opj9ziQ/wAH1H8av/o2f+caM95M75FeyL/G1PlWw+9pP/CLf4qf9Nv/ACjRjfM75lex7PG4fKs/i02qOzEXlizH4kBfqH4xohpqi5z+74nz+AnTAmAMcDpJTIREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
              alt=""
              className="product-infor__img"
            />
            <span className="product-infor__name">Apple Airpod</span>
          </div>
          <div className="product-infor__bottom">
            <div className="product_infor__item">
              <span className="product_infor__key">Id: </span>
              <span className="product_infor__value">123</span>
            </div>
            <div className="product_infor__item">
              <span className="product_infor__key">Sales: </span>
              <span className="product_infor__value">123</span>
            </div>
            <div className="product_infor__item">
              <span className="product_infor__key">Active: </span>
              <span className="product_infor__value">YES</span>
            </div>
            <div className="product_infor__item">
              <span className="product_infor__key">In stock: </span>
              <span className="product_infor__value">NO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_infor__bot">
        <form action="" className="product-infor__form">
          <div className="product-infor__left">
            <label htmlFor="">Product name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label htmlFor="">In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>
          <div className="product-infor__right">
            <div className="product__upload">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYGBIYEhESEhIYERIRERIZGRQZGRgUGBgcIy4lHB4rHxgYJjomKzAxNTU1GiQ7QjszPzA0NTEBDAwMDw8QGBERGjEdGB0xMTE0PzQxNDE/PzQxNDE/MTExMTE/MTExMTE0MTQxMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAUGBwj/xAA+EAACAgEDAQUEBggFBQEAAAABAgADEQQSITEFE0FRcSIyYYEGkaGxwfAHFCNCU2KCshUzcpLRk6LS4eJS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD69qtVXUu6yxUTIG5mVFyegyeJo9l9s16iy5FwprsKBS6Gx1GP2uwHKqTkAnqBnoRPnf6edFc2n0tyZNNdli2qMlQzhdjnHh7LLk+LAeM4P6CrQNZqVNBZmoUi7aP2IDZKknoGyvT/APA4xkgPuocEkAjI6jPI9ZOeM1VWqpF2pxta4E2FAFuUi4dwrFiVLCtmTPTIXPElbZeLhWTqe6ZNY1KK478hRpAjMWO7Ase3G49GG72egesWxWztYHadrYIODgHB+PI+uWzx6aTWhjuZk3O7s6I1im0pSA+1XU7MizAbK8HcPdnr4GYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgQdAwwQCPEEZB+UBACSAMnGTjk46Zk4gRZQRgjI8pjaM58eQD489R9g+qTiAiIgIiICIiAkHYAZMnNE27znw6D/AJiC42Men3ZlisfH6/CfFPpf9M9fXrLTReUrruatKtqlHCMVJbIy2WDdCOMePM+v9ja0anTUXAYFlNVmPLeobHyzKOhEgv3cScgREQEREBESFjYECL244Er7xvP7Jxbu13UsStK1i16Ve3Vmkuy5yMd2QOhwM+EUdqW2WWVomnaxNm9Bq7NyhlDKf8nkEMORxA7qW+f1y6cEdpOl1dN6IhsWw1st5s3MhTKYZF5IfIxnoZ2q2yPsgWREQEREBERAREQEREBERAREQNfVvhceJ4+XjOPpanW+xzZmtkoSurnCMjWF2/q3p/s9J1NQMlj5Db+J++c88Hiag+LfThLK9ZfUVIZtRZZWu3LWK7l1KcZbO7HHiCOs+udmdlWHs3R6bvDXZWmgLsuTg0tWz18EZB2svz8ZnWOSRg/+p0uz3wojBPs6+5rtUlqgIj19wwUjejVgnJ8cNuE6cpoOcn44Hyl0yEREBERASu0cSyIHmMJtvpv09jo91rEClrK3Vm3KQR49PiCJxl7I2sxrs1NYVlegpoUSxG53tY2zNjEbVJ43KoDbjyfcPWR06SEDz1lL6jUaR8OopS1rXehq1sYmrCqGb2clCf3sAY8cz1FQ4+cqWsn0mwBAzERAREQEREBERAREQEREBERA1mGVY/zN9+J59kd7goJAyBn1Inoa/cPq39xnO01X7Yn0P2iWCjX9n2g5Qbl+BG4eoP4S3Rae04BUqPEnGfkJ24jRBECgAdBJxEgREQEREDm6ztBqnRBRY+84V1NG0naWI9twRgKT0xLK+0qn9x1f2lX2XQ4LEgHr04Prg4zLNRp9z1NnGx2fGM7s1umPh72flORoOwnrbfZdvONMCcWknumsJb2nbbu3+6uAuPGB1v1+oWd0bFFmQNm4bskbgMfEAn5Ga13benVSwtRgr1K+10OwWWCsM3PC5PX4GZt7OLFzu9++m7p0FYQbfns6/GcnQdm3ttWwbVRNEqk1orHuLxYVO12ycKBngZPA6gB2z2nQArG5NrFgh3rhip2nHoSAfIyOr7Q7t0rFbuzAn2TUoUbgOd7rnr0GTwZztZ2AbGZt4wxvDKTcqlbGUkEI67sbSMHg58PHZ7W7LN+QvdgNU1TM9W+xATndW2RgjyPiFPhyGzpu06rHasOosVnU1lhv9k4JxnpyD6ETfnLHZpDVtuHsaq3UH2feD12Jt9R3gOf5Z1ICIiAiIgIiYJgCZjInK0/b+ksvOlS9GvGc1g+1wMkeoHOOuOZ0WlwXRKFs8/8A2JdIMxEQNev3T/qf+4zWoH7Q/nxE2a/db/W/9xmtV/mH8+Imh0YiJkIiICIiAiIgef1GvuG8BWwNbRWLM17QjXVKy4zu5DMOnjNU9r2IquAp78VWVqzvtqD3007X8ji1ThcDKNxnLH0hpXptGCwcjAwWBBDeuQDn4CadnZFDBwa1xY9dlmEQbyjq4DYHtAsCTnPvN5wKW7RtFdhCq1iXLSdvuNkpllUnJIV87M5JUgGah7dfNeApBahbMLcCDZqGo5LACsgrnadxyGHGAzdkaKrZ3Xdp3f8AD2L3fXPu4x15lZ7Op3Vt3SZQAJ+zr9kA5UDjIweRjHMCjszV2XKrtsC2VrYigsbEDZ4cHrjjkY5yMeM56au1Fcix7EY1U02ugP7TDd7fhAP2eMEDgEqQOGUzuVaStCxStVLnLlUVS555Yge11PXzMxpdDVVnuqkTON2xFTOM4zgc4yfrged0Pad+wWBw6JpNPbYXG1rDvtV2UKAFYheuMeyBgA5HrJR+rpgjYuCoQjaMFRnCn4cnj4mXwEREBERASnUn2G9DLpXcPZMD4L9ByTrtPYWG86lXI8SXJ3fP22n2T6SdrjRaW3VNWzqmzKrgHDMqlifADOSfITxf0a+hDafXG57UahHaylFD96xOdquCNq7c+BOSB0n0RnmhVTYLFR1yAyq4BGGAYAgEeB5myjYwPA9PgfKave8y8e0Mfn1gbMTVOtReGcBvEEgQNdV/EX/cJkSq6N/rb+6ayf5n58xL6CCrEHILMQfA5M1iwFgyfT4+PH1GaHTiRDA9JKZCIiAiIgIiICIiAiQZwJX3/wAPt5gXxK1sB9ZZAREQEREBERATVusJO1f6m64+A+MtufA+RP1TznbWtdT3dZIxzYw94k84z4SwdC5drZmXvAGSePWeX0z2ISQ3XqDyD6ibe9394/LoJRutq2JJAOwfLPxxOzonyAfhONp0zkfyt/aZ1dBwo9IGwR7RHofrmrfqAv7ufnibDtgt/pzORqHgdbRNuQnGMknHlNPUoGsGTwMk+RGOQZqaTt3T1I63WrTsbGbXSsMCoIZcnlTyM+akdZxLfpbXZa1dYV0at9tiWBwwwVBUAc8nk5wADk+BD1ndMvKOR/KxLofr5HyPyl+m1W7hhhhjIP2HPiPjPBafW3Vn9m7AeXVT/SeJ6Ls/tBrRllAsQZGOjj95ceGf+D4QmvTxKqH3KDLZlSIiAiIgJB2wCZOV2jgwNLVWOtdjIm+wIzJXuCb2AyE3HgZPGZ4XtDtCu7UWayu9qHq0VW0lCzK/6xaraa2nqxLYXYOc4IPQz3Wp1CVVvZYwWtEZ3c8KqqMkn5T56Vus7QfXrpF9iirUrpWXF9te50Fx8BeFXcoPhheDzA992ZdZZTXZdX3drIrWV7t3dsRyuZ0kOROfoNZXfWl1Thq3UOjDxB+4+GPhN+ocfOBZERAREQEREDV1J5/p/GcbV0Zdz5sT9c7Or4AbyPPoZqOAePHwPXImoOS2n+EwtY/InXSkj93iQs0hJyABA09MPbA+Df2mdPR9B+fCaaaRlcNxgZ8TnoR5Tc05wBn7jAnefa9ROHd1I+OJ2dTliCv3ETQt0jkk4gc5qd3UAj4gGP1YdPsnUXSnxEvCAdF+4QOG+hGM7ZPs2vbZOtchPh9oka6NgJAyx8ug+A8zA3+zvcx+epH4Tcmro1wv2fV+TNqShERIERKr7NqMxGdqlseeBmBbMTi6btwPxsHXT8rYrpi5yo9ofvDGSuPEc8zbbtOkIr7/AGWRLFwrksrFVXCgZJJZQBjJJ6QLrK8fEfnrPP8Aan0e/WdV3tlrDTtRXVbQuVN2x3cK7jkJ7fKjrjnidQ9t07gMtt7t7C5rsCqEbYytkeywORtPORjGSMyPbFAXdub3mUp3FxtUqoZi1e3eoAKnJAGGXzGQ2aaQAqqoVAAFAAVVA6AAdBNoCca3t+tWKhXIF60swrsIO6g2q1e0HvOMDA55z0xm/V9qotKWqVZXdVUs/dLk594sMqRg8EZyMdYHTic2ztHFdLKqs9rBK1WwNWx2s5O8D3Qqsc48Ok2NDqRagcAjl0ZTglWRijrkdcMpGfhA2oiICIiBFlBBB6HgzX0tYQlR0Gcec2pTX7z+v4QBHJkHljSDzQoaYDETLyMDPeHz+6N5/IEjMwM94fyBM94fh9UjECRbMLMSSwNiocTNZOWHp90VdIr6t8pBbERIEqvr3Iy5xuVlz5ZGMy2IHGo7FClWZ8lRSBtrWtcVvvGQMkknxJ48AMnNJ+j4NYRrdyolddYNaEKtdium8H3vcAPTI6YPM78QOKewxtVQwXC2KdlSIuXsFgZVHC7WUdc5HXJ5mf8ACH3NYLsXMbNzCtdm11rUqqk8YFNZBJPIOcg4nZiByKOxlRkKsdiWV2KmBkFdOaMZ8Rt2n1B8+L10LKgWuzawsexWKK4yzuxBXy9sjgg8dZ0IgcgdklUQLZ7aWvejFAR3jmw2MVBGVbvXGMjHnN3Q6UVIEBJ9p3ZjgFmdi7tgdMsxOPjNqICIiAiIgJTX7zev4CXSlPfb5fcIEjIPJtIPNQUNISbSBgYiIgZmZiZEBJLIySwNmrpCe839P4xV0mV95v6fxkosiIkCIiAiIgImCZHePOBOJgGZgIiICIiAiIgJSvvt8vuEulSe83y+4QJNK3ljSt5qChpCTaQMDEREDMRMwAklkZJYGzT0mV95vRfxmKZlfePoPxmRZERAREQEiTjmSld3SBS7E/8AE4n0m7ZbSVoKqWu1Ftnd00jjccZLN5KBj6x0HI81+lTta2pKKK3ZFs7xrGUlWYJsATI8CXJPoJ8yTVWLWalscVHO6sWOK2z1ygOD9UD9FUM4Vd+N+1d4Gdu7HtYz4ZzNtWyMzwX6LtJs0Xeb2O+x8V7j3dYRiuFXwJIJJ+I8p7qnp84FsREBERAREQEpX32+X3S6VD3z6CBJpW8mx5kHM1BQ0gZJzIkwMRGYgZiYzMwMySyMypgbNMkvvH0H4yNMkvvH0H4yUWRESBERASLLkYkogeI/SJ2C+r0yvWu66lmdEAyzowAdF+PsqceOzHjPki9l6llLrprigzucUWlFx1ywXAn6PZAZDufjA+efos7P1KV22WF0ocjuqmGNzfvXAEZAwAo8+fIGfRq1wIVAPXzk4CIiAiIgIiICUE4f1A/GXzV1Qxhh4cH5xBN25lTvK2tzKy80Js0rLSJMxmBLMbpHMZgT3RukMxmBbuklaUZmQ0DfpaTrOSfQfjNJbOJt6YeznzOZKL4iJAiIgJyO0WzdTWzslbV3udrmos6GraNwIPAZjjPOPITryq6lHGHUMMg4ZQwyOhwYHn6Nbap3ratlO/Q1ksrd5Z3uxe8Uhgqe8HxtOeemZAds2jo1QVaKLjWwsa20vdYhVGL8e4AOG5YT0uweQ6g9B4dDKP1KvebNg37UXJGdoQsRtHgfbbkecDmdo6u5bdStYDKukqcZs2bGLagFgNpyTtX/AGiWaF3/AFhwbGYHT0WBDt2oSXB24GedoJzk/dOsUHPA5GDx1Hl9p+uNo64GcYzjw8oE4iICIiAiIgJFlyMGSiByNTWUPPu+DfgZV3k7RGZpXdm1tyMqf5TgfUeJdGjvjfLz2QfC0/NQfuxInsh/4v8A2f8A1Lop7yN8k/Y9v7ty/Opj9ziQ/wAH1H8av/o2f+caM95M75FeyL/G1PlWw+9pP/CLf4qf9Nv/ACjRjfM75lex7PG4fKs/i02qOzEXlizH4kBfqH4xohpqi5z+74nz+AnTAmAMcDpJTIREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
                alt=""
                className="product__upload-img"
              />
              <label htmlFor="">
                <PublishIcon />
              </label>
              <input type="text" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-infor__upload-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductInfor;
