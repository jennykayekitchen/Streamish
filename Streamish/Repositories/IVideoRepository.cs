﻿using Streamish.Models;
using System.Collections.Generic;
using System;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        Video GetById(int id);
        void Update(Video video);
        List<Video> GetAllWithComments();
        Video GetVideoByIdWithComments(int id);
        List<Video> Search(string criterion, bool sortDescending);
        List<Video> Hottest(DateTime inputdate);
    }
}